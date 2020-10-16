#!/usr/bin/env node

const micro = require("micro")
// const { yargs } = require("yargs")
const serverFunc = require("./packages/server/app.js")
const serveHandler = require("serve-handler")
const path = require("path")

const service = micro(async (req, res) => {
  if (req.url.startsWith("/api")) {
    serverFunc(req, res)
  } else {
    return serveHandler(req, res, {
      public: path.resolve(__dirname, "./packages/client/build"),
    })
  }
})

console.log(
  "Running twitch-git-diff-monitor on port 4555\n\nIn OBS, add a browser window to http://localhost:4555"
)
service.listen(4555)

console.log(
  'You can also run it as a chrome app using "google-chrome --app=http://localhost:4555"'
)
