import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Data from './component/Data'
import RSP from './component/RSP'
import UseEffect from './component/UseEffect'
import MyRandom from './component/MyRandom'
import MyAxios from './component/MyAxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 데이터 양방향 통신*/}
      {/* <Data></Data> */}

      {/* Lifecycle이 필요한 이유를 확인하기 위한 가위바위보 */}
      {/* <RSP></RSP> */}
      {/* <UseEffect></UseEffect> */}
      {/* <MyRandom></MyRandom> */}
      <MyAxios></MyAxios>
    </>
  )
}

export default App
