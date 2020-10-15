export const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`

export const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`

export default `const hashChunk = (chunk) => {
  return \`\${chunk.filePath},\${chunk.lineStart},\${chunk.numberLines}\`
}

const findAnyChangedChunks = (lastChunks, newChunks) => {
  const hashesOfLastChunks = new Set()

  for (const chunk of lastChunks) {
    hashesOfLastChunks.add(hashChunk(chunk))
  }

  for (const chunk of newChunks) {
    if (!hashesOfLastChunks.has(hashChunk(chunk))) {
      return chunk
    }
  }

  return null
}
`
