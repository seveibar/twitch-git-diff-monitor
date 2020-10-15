import React from "react"
import { styled } from "@material-ui/core"
import "highlightjs/dracula.css"
import "dracula-prism/css/dracula-prism.css"
import "../src/App.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const Container = styled("div")({})

export const decorators = [
  (Story) => (
    <Container>
      <Story />
    </Container>
  ),
]
