import React, { useEffect, useState } from "react"
import { styled } from "@material-ui/core"
import * as colors from "@material-ui/core/colors"
import "./App.css"

const Container = styled("div")({
  overflow: "hidden",
})
const Header = styled("div")({
  backgroundColor: colors.blue[800],
  color: "#fff",
  fontSize: 12,
  padding: 6,
  fontWeight: 600,
})
const Changes = styled("div")({
  backgroundColor: "#fff",
  whiteSpace: "pre",
  fontSize: 12,
  overflow: "hidden",
  "& *": {
    fontFamily: "Monospace",
  },
})
const Change = styled("div")(({ op }) => ({
  color: "#fff",
  ...(op === "add"
    ? {
        backgroundColor: colors.green[500],
      }
    : op === "del"
    ? {
        backgroundColor: colors.red[600],
      }
    : {
        color: colors.grey[200],
        backgroundColor: colors.grey[500],
      }),
}))

const hashChunk = (chunk) => {
  return `${chunk.filePath},${chunk.lineStart},${chunk.numberLines}`
}

const findAnyChangedChunks = (lastChunks, newChunks) => {
  const hashesOfLastChunks = new Set()

  for (const chunk of lastChunks) {
    hashesOfLastChunks.add(hashChunk(chunk))
  }

  for (const chunk of newChunks) {
    if (!hashesOfLastChunks.has(hashChunk(chunk))) {
      return chunk
    }
  }

  return null
}

const convertToJustChunks = (changedFiles) => {
  const justChunks = []
  for (const changedFile of changedFiles) {
    for (const chunk of changedFile.chunks) {
      justChunks.push({
        filePath: changedFile.to,
        lineStart: chunk.newStart,
        numberLines: chunk.changes.filter((c) => c.type !== "normal").length,
        lines: chunk.changes.map((c) => ({ op: c.type, content: c.content })),
      })
    }
  }
  return justChunks
}

const App = () => {
  const [latestChunk, setLatestChunk] = useState(null)
  useEffect(() => {
    let lastLoadedChunks = []
    try {
      lastLoadedChunks = JSON.parse(
        window.localStorage.getItem("lastLoadedChunks")
      )
    } catch (e) {}

    if (!lastLoadedChunks || !lastLoadedChunks.length) {
      lastLoadedChunks = []
    }

    async function loadDiffs() {
      const res = await fetch("/api").then((r) => r.json())

      const newChunks = convertToJustChunks(res)

      const changedChunk = findAnyChangedChunks(lastLoadedChunks, newChunks)
      if (changedChunk) {
        setLatestChunk(changedChunk)
      }

      if (newChunks.length === 0) {
        setLatestChunk(null)
      }

      lastLoadedChunks = newChunks
      window.localStorage.setItem(
        "lastLoadedChunks",
        JSON.stringify(lastLoadedChunks)
      )
    }
    loadDiffs()
  }, [])

  if (!latestChunk)
    return (
      <Container>
        <Header>No Recent Changes</Header>
      </Container>
    )

  return (
    <Container>
      <Header>Last Change: /packages/client/App.js</Header>
      <Changes>
        {latestChunk.lines.map((line, i) => (
          <Change key={i} op={line.op}>
            {line.content.slice(1)}
          </Change>
        ))}
      </Changes>
    </Container>
  )
}

export default App
