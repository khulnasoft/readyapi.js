import { ApiReferenceReact } from '@readyapi/api-reference-react'
import React from 'react'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@readyapi/galaxy/dist/latest.yaml',
        },
      }}
    />
  )
}

export default App
