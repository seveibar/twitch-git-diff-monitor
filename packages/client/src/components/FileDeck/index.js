import React, { useEffect, useReducer } from "react"
import File from "../File"
import { styled } from "@material-ui/core"
import classnames from "classnames"

const Container = styled("div")({
  margin: 32,
  position: "relative",
  width: 500,
  height: 500,
})

const FileContainer = styled("div")({
  position: "absolute",
  left: 0,
  top: 0,
  transition: "opacity 300ms, transform 300ms",
  opacity: 0,
  "&.entering": {
    opacity: 0,
    transform: "rotate(-8deg) translate(-200px, 20px)",
  },
  "&.visible": {
    opacity: 1,
    transform: "translate(0px, 0px)",
  },
  "&.exiting": {
    opacity: 0,
    transform: "rotate(8deg) translate(200px, 20px)",
  },
})

export const FileDeck = ({ files }) => {
  const [visibleFileIndex, incVisibleFile] = useReducer(
    (idx) => (idx + 1) % files.length,
    0
  )

  useEffect(() => {
    let interval = setInterval(() => {
      incVisibleFile()
    }, 25000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Container>
      {files.map((file, i) => (
        <FileContainer
          key={i}
          className={classnames({
            visible: visibleFileIndex === i,
            entering: visibleFileIndex === i + 1,
            exiting: visibleFileIndex === i - 1,
          })}
        >
          <File {...file} animTime={25000} />
        </FileContainer>
      ))}
    </Container>
  )
}

export default FileDeck
