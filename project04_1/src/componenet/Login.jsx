import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    
    const nav= useNavigate();

    const moveRandom=()=>{
        nav('/random')
    }

  return (
    <div>
        <h1>절거운 React 수업</h1>
        <br />
        <form>
            ID: <input type="text" />
            Pw: <input type="password" />
            <input type="submit" value="로그인시도" onClick={moveRandom}/>
        </form>
    </div>
  )
}

export default Login