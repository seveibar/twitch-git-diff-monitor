import React from "react"
import { styled } from "@material-ui/core"
import range from "lodash/range"

const Container = styled("div")({
  position: "absolute",
  display: "flex",
  left: 250,
  top: -24,
  opacity: 0.8,
  textShadow: "0px 1px 4px rgba(0,0,0,1)",
  color: "#fff",
  marginLeft: "-50%",
  "& span": {
    fontSize: 16,
  },
})

export const Dots = ({ fileIndex, totalFiles }) => {
  return (
    <Container>
      {range(totalFiles).map((ind) => (
        <span key={ind}>{ind === fileIndex ? "●" : "○"}</span>
      ))}
    </Container>
  )
}

export default Dots
