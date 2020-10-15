import React, { useState } from "react"
import { styled } from "@material-ui/core"
import colors from "../../colors"
import Highlight from "react-highlight.js"
import DiffViewer from "react-diff-viewer"
import Prism from "prismjs"
import Measure from "react-measure"

const Container = styled("div")({
  color: colors.Foreground,
  backgroundColor: colors["Background"],
  boxShadow: "0px 2px 32px rgba(0,0,0,1)",
  width: 360,
  height: 360,
  borderRadius: 4,
  overflow: "hidden",
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

const Mover = styled("div")({})

const highlightSyntax = (str) => (
  <pre
    style={{ display: "inline" }}
    dangerouslySetInnerHTML={{
      __html: Prism.highlight(str, Prism.languages.javascript),
    }}
  />
)

export const File = ({ filePath, numberOfChanges, oldCode, newCode }) => {
  const [diffViewerDims, setDiffViewerDims] = useState()
  return (
    <Container>
      <div className="title">
        {filePath}
        <span className="changesText">(±{numberOfChanges})</span>
      </div>
      <Mover>
        <Measure
          bounds
          onResize={(contentRect) => {
            // setDiffViewerDims(contentRect.bounds)
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
              <DiffViewer
                oldValue={oldCode}
                newValue={newCode}
                splitView={false}
                hideLineNumbers={true}
                disableWordDiff
                useDarkTheme
                codeFoldMessageRenderer={() => ""}
                renderContent={highlightSyntax}
                styles={{
                  codeFold: {
                    height: 0,
                  },
                }}
              />
            </div>
          )}
        </Measure>
      </Mover>
    </Container>
  )
}

export default File
