const { send, json } = require("micro")
const range = require("lodash/range")
const execSync = require("child_process").execSync
var parse = require("parse-diff")

const repoPath = "/home/seve/workspace/os/twitch-git-diff-monitor"

module.exports = async (req, res) => {
  // console.log("repo state", )

  const output = execSync(`git diff`, {
    cwd: repoPath,
  }).toString()

  return send(res, 200, parse(output))
  // send(res, 200, {
  //   gitDiffs: [
  //     {
  //       file: "/package.json",
  //       diffLines: [
  //         {
  //           op: "add",
  //           line: 30,
  //           text: `"main": "index.js"`,
  //         },
  //       ],
  //     },
  //   ],
  // })
}
