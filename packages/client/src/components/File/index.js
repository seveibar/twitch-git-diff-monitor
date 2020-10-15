import React, { useState, useEffect, useReducer } from "react"
import { styled } from "@material-ui/core"
import colors from "../../colors"
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
    transition: "opacity 500ms",
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

export const File = ({
  filePath,
  numberOfChanges,
  oldCode,
  newCode,
  animTime = 10000,
}) => {
  const frameToStartMoving = Math.round((animTime / 1000) * 0.2)
  const timeOfTransition = Math.round(animTime * 0.6)

  const [diffViewerDims, setDiffViewerDims] = useState()

  const [frame, incFrame] = useReducer(
    (s) => (s + 1) % Math.floor(animTime / 1000),
    0
  )

  useEffect(() => {
    let interval = setInterval(() => {
      incFrame()
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Container>
      <div
        className="title"
        style={{ opacity: frame < frameToStartMoving ? 1 : 0 }}
      >
        {filePath}
        <span className="changesText">(±{numberOfChanges})</span>
      </div>
      <Mover
        style={{
          marginTop:
            frame < frameToStartMoving
              ? 0
              : diffViewerDims.height < 360
              ? 0
              : -(diffViewerDims.height - 360),
          transition:
            frame < frameToStartMoving
              ? ""
              : `margin-top ${timeOfTransition}ms linear`,
        }}
      >
        <Measure
          bounds
          onResize={(contentRect) => {
            setDiffViewerDims(contentRect.bounds)
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
