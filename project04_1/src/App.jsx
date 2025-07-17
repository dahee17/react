import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Join from './componenet/Join'
import Login from './componenet/Login'
import MyRandom from './componenet/MyRandom'
import ProHome from './componenet/ProHome'
import ProDetail from './componenet/ProDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path ='/' element={<Join></Join>}></Route>
      <Route path ='/login' element={<Login></Login>}></Route>
      <Route path ='/random' element={<MyRandom></MyRandom>}></Route>
      <Route path='/prohome' element={<ProHome></ProHome>}></Route>
      <Route path='/prodetail' element={<ProDetail></ProDetail>}></Route> 
    </Routes>
    </>
  )
}

export default App
