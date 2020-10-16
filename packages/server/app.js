const { send, json } = require("micro")
const range = require("lodash/range")
const execSync = require("child_process").execSync
const fs = require("fs")
var parse = require("parse-diff")

const repoPath = process.cwd()

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
    responseArray.push({
      filePath: fileDiff.to,
      numberOfChanges: fileDiff.additions + fileDiff.deletions,
      oldCode: execSync(`git show "HEAD:${fileDiff.to}"`).toString(),
      newCode: fs.readFileSync(fileDiff.to).toString(),
    })
  }

  return send(res, 200, responseArray)
}
