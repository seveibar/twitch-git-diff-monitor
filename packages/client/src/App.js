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

const App = () => {
  const [response, setResponse] = useState()
  useEffect(() => {
    async function loadDiffs() {
      const res = await fetch("/api").then((r) => r.json())
      console.log({ res })
      setResponse(res)
    }
    loadDiffs()
  }, [])

  if (!response) return "loading"

  return (
    <Container>
      <Header>Last Change: /packages/client/App.js</Header>
      <Changes>
        {response[0].chunks[0].changes.map((change, i) => (
          <Change key={i} op={change.type}>
            {change.content.slice(1)}
          </Change>
        ))}
      </Changes>
    </Container>
  )
}

export default App
