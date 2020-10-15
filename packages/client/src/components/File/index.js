import React from "react"
import { styled } from "@material-ui/core"
import colors from "../../colors"
import Highlight from "react-highlight.js"
import DiffViewer from "react-diff-viewer"
import Prism from "prismjs"

const Container = styled("div")({
  color: colors.Foreground,
  backgroundColor: colors["Background"],
  boxShadow: "0px 2px 32px rgba(0,0,0,1)",
  width: 360,
  height: 360,
  borderRadius: 4,
  padding: 16,
  "& .title": {
    fontWeight: 600,
    marginBottom: 16,
  },
  "& .changesText": {
    marginLeft: 8,
    opacity: 0.5,
  },
})

const highlightSyntax = (str) => (
  <pre
    style={{ display: "inline" }}
    dangerouslySetInnerHTML={{
      __html: Prism.highlight(str, Prism.languages.javascript),
    }}
  />
)

export const File = ({ filePath, numberOfChanges, oldCode, newCode }) => {
  return (
    <Container>
      <div className="title">
        {filePath}
        <span className="changesText">(±{numberOfChanges})</span>
      </div>
      <DiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={false}
        hideLineNumbers={true}
        useDarkTheme
        renderContent={highlightSyntax}
      />
    </Container>
  )
}

export default File
