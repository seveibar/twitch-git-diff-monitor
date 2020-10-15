import React from "react"
import FileDeck from "./"
import { oldCode, newCode } from "../File/code-example"

export default {
  title: "FileDeck",
  component: FileDeck,
}

export const Primary = () => {
  return (
    <FileDeck
      files={[
        { filePath: "file1.js", numberOfChanges: 25, oldCode, newCode },
        { filePath: "file2.js", numberOfChanges: 0, oldCode: "", newCode: "" },
      ]}
    />
  )
}
