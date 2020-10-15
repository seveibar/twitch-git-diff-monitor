import React from "react"
import File from "./"
import codeExample, { oldCode, newCode } from "./code-example.js"

export default {
  title: "File",
  component: File,
}

export const Primary = () => {
  return (
    <File
      filePath="path/to/file.js"
      numberOfChanges={12}
      oldCode={oldCode}
      newCode={newCode}
    />
  )
}
