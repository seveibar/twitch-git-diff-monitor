import React, { useEffect, useState } from "react"
import { styled } from "@material-ui/core"
import * as colors from "@material-ui/core/colors"
import "./App.css"
import "highlightjs/dracula.css"
import "dracula-prism/css/dracula-prism.css"

import FileDeck from "./components/FileDeck"

const Container = styled("div")({
  overflow: "hidden",
})

const App = () => {
  const [files, setFiles] = useState(null)
  useEffect(() => {
    async function loadDiffs() {
      const res = await fetch("/api").then((r) => r.json())
      setFiles(res)

      setTimeout(() => {
        loadDiffs()
      }, 10000)
    }
    loadDiffs()
  }, [])

  if (!files) return <Container></Container>

  return (
    <Container>
      <FileDeck files={files} />
    </Container>
  )
}

export default App
