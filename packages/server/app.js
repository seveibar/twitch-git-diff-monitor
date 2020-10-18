const { send, json } = require("micro")
const range = require("lodash/range")
const execSync = require("child_process").execSync
const fs = require("fs")
var parse = require("parse-diff")
const path = require("path")

const repoPath = process.env.REPO_PATH || process.cwd()

const ignoreFilesEndingWith = ["yarn.lock", "package-lock.json"]

module.exports = async (req, res) => {
  const gitDiffOutput = execSync(`git diff`, {
    cwd: repoPath,
  }).toString()

  const fileDiffs = parse(gitDiffOutput)

  const responseArray = []

  for (const fileDiff of fileDiffs) {
    if (
      ignoreFilesEndingWith.some((ending) =>
        fileDiff.to.toLowerCase().endsWith(ending)
      )
    ) {
      continue
    }

    if (fileDiff.to === "/dev/null") {
      // TODO handle files that are deleted
      continue
    }

    let newCode
    try {
      newCode = fs.readFileSync(path.join(repoPath, fileDiff.to)).toString()
    } catch (e) {
      console.log(`Couldn't read file: "${fileDiff.to}"`)
      continue
    }

    responseArray.push({
      filePath: fileDiff.to,
      numberOfChanges: fileDiff.additions + fileDiff.deletions,
      oldCode: execSync(`git show "HEAD:${fileDiff.to}"`, {
        cwd: repoPath,
      }).toString(),
      newCode,
    })
  }

  return send(res, 200, responseArray)
}
