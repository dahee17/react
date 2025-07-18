import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createContext } from 'react'

import LeftChild01 from './component/LeftChild01'
import RightCild01 from './component/RightChild01'

export const AppText = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <AppText.Provider value={
        {
          cnt : count,
          setCnt : setCount
        }
      }>
        <LeftChild01></LeftChild01>
        <RightCild01></RightCild01>
      </AppText.Provider>
      
    </>
  )
}

export default App
