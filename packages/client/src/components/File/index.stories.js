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

export const HasExpandingStuff = () => {
  const props = {
    filePath: "packages/client/package.json",
    numberOfChanges: 1,
    oldCode:
      '{\n  "name": "client",\n  "version": "0.1.0",\n  "proxy": "http://localhost:3001",\n  "dependencies": {\n    "@material-ui/core": "^4.11.0",\n    "@testing-library/jest-dom": "^4.2.4",\n    "@testing-library/react": "^9.3.2",\n    "@testing-library/user-event": "^7.1.2",\n    "classnames": "^2.2.6",\n    "dracula-prism": "^1.2.1",\n    "highlightjs": "github:dracula/highlightjs",\n    "prismjs": "^1.22.0",\n    "react": "^16.14.0",\n    "react-diff-viewer": "^3.1.1",\n    "react-dom": "^16.14.0",\n    "react-highlight.js": "^1.0.7",\n    "react-scripts": "3.4.3",\n    "use-event-callback": "^0.1.0"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "storybook": "start-storybook -p 6006 -s public",\n    "build-storybook": "build-storybook -s public"\n  },\n  "eslintConfig": {\n    "extends": "react-app"\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "devDependencies": {\n    "@babel/core": "^7.12.0",\n    "@storybook/addon-actions": "^6.0.26",\n    "@storybook/addon-essentials": "^6.0.26",\n    "@storybook/addon-links": "^6.0.26",\n    "@storybook/node-logger": "^6.0.26",\n    "@storybook/preset-create-react-app": "^3.1.4",\n    "@storybook/react": "^6.0.26",\n    "babel-loader": "^8.1.0",\n    "react-is": "^16.13.1"\n  }\n}\n',
    newCode:
      '{\n  "name": "client",\n  "version": "0.1.0",\n  "proxy": "http://localhost:3001",\n  "dependencies": {\n    "@material-ui/core": "^4.11.0",\n    "@testing-library/jest-dom": "^4.2.4",\n    "@testing-library/react": "^9.3.2",\n    "@testing-library/user-event": "^7.1.2",\n    "classnames": "^2.2.6",\n    "dracula-prism": "^1.2.1",\n    "highlightjs": "github:dracula/highlightjs",\n    "prismjs": "^1.22.0",\n    "react": "^16.14.0",\n    "react-diff-viewer": "^3.1.1",\n    "react-dom": "^16.14.0",\n    "react-highlight.js": "^1.0.7",\n    "react-measure": "^2.5.2",\n    "react-scripts": "3.4.3",\n    "use-event-callback": "^0.1.0"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "storybook": "start-storybook -p 6006 -s public",\n    "build-storybook": "build-storybook -s public"\n  },\n  "eslintConfig": {\n    "extends": "react-app"\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "devDependencies": {\n    "@babel/core": "^7.12.0",\n    "@storybook/addon-actions": "^6.0.26",\n    "@storybook/addon-essentials": "^6.0.26",\n    "@storybook/addon-links": "^6.0.26",\n    "@storybook/node-logger": "^6.0.26",\n    "@storybook/preset-create-react-app": "^3.1.4",\n    "@storybook/react": "^6.0.26",\n    "babel-loader": "^8.1.0",\n    "react-is": "^16.13.1"\n  }\n}\n',
  }

  return <File {...props} />
}
