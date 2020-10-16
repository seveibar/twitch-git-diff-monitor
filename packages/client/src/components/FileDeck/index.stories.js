import React from "react"
import FileDeck from "./"
import { oldCode, newCode } from "../File/code-example"
import colors from "../../colors"
import longStringOfCode from "../File/long-code"
import range from "lodash/range"

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

export const ShortAndLongFile = () => {
  const longLongCode = range(10)
    .map(() => longStringOfCode)
    .join("\n")
  return (
    <FileDeck
      files={[
        { filePath: "file1.js", numberOfChanges: 25, oldCode, newCode },
        {
          filePath: "file2.js",
          numberOfChanges: longLongCode.split("\n").length,
          oldCode: "",
          newCode: longLongCode,
        },
      ]}
    />
  )
}
