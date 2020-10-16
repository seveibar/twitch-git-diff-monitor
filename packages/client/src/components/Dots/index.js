import React from "react"
import { styled } from "@material-ui/core"
import range from "lodash/range"
import colors from "../../colors"

const Container = styled("div")({
  position: "absolute",
  display: "flex",
  left: 320,
  top: -24,
  fontWeight: 900,
  textShadow: "0px 0px 4px rgba(0,0,0,1)",
  color: colors["Foreground"],
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
