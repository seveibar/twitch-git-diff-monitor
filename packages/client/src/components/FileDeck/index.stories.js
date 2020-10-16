import React from "react"
import FileDeck from "./"
import { oldCode, newCode } from "../File/code-example"
import colors from "../../colors"

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

export const DarkBg = () => {
  return (
    <div
      style={{
        padding: 128,
        width: "100vw",
        height: "100vh",
        backgroundColor: colors["Background"],
      }}
    >
      <FileDeck
        files={[
          { filePath: "file1.js", numberOfChanges: 25, oldCode, newCode },
          {
            filePath: "file2.js",
            numberOfChanges: 0,
            oldCode: "",
            newCode: "",
          },
        ]}
      />
    </div>
  )
}
