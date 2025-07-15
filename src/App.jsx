import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/cute-cats.jsx'
import CuteCats from './components/cute-cats.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="text-yellow-900 text-xl">new project
     
     <CuteCats />
     </div>
  )
}

export default App
