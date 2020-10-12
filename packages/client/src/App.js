import React, { useEffect, useState } from "react"

const App = () => {
  const [response, setResponse] = useState()
  useEffect(() => {
    async function loadDiffs() {
      const res = await fetch("/api").then((r) => r.json())
      setResponse(res)
    }
    loadDiffs()
  }, [])

  return (
    <div>
      <pre style={{ color: "red" }}>{JSON.stringify(response, null, "  ")}</pre>
    </div>
  )
}

export default App
