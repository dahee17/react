import React from 'react'
import { useNavigate } from 'react-router-dom'

const Join = () => {

     const nav= useNavigate();
     
    const move = () => {
        nav('/login')
    }
  return (
    <div>
        <h1>절거운 React 수업</h1>
        <br />
        <h1>회원가입 페이지 입니다</h1>
        <br />
        <form>
            ID: <input type="text" /><br />
            PW: <input type="password" /><br />
            NICK: <input type="text" />
            <br />
            <input type="submit" value= "JOIN" onClick={move}/>
            <input type="submit" value="초기화"/>
        </form>

    </div>
  )
}

export default Join