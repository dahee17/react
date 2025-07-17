import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Join = () => {

    const nav= useNavigate();

    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
    const [inputNICK, setInputNICK] = useState(''); 

    const tryJoin = () => {
      // console.log(inputID)
      //  사용자가 입력한 id, pw, nick
      // 쿼리스트링으로 주소에 추가해주자!
      // 쿼리스트링 구조 : 주소 ? key1=value1&key2=value2&key3=value3
        // nav('/login?id='+ inputID+ '&pw='+inputPW )
        nav(`/login?id=${inputID}&pw=${inputPW}&nick=${inputNICK}` )
      }

  return (
    <div>
        <h1>절거운 React 수업</h1>
        <br />
        <h1>회원가입 페이지 입니다</h1>
        <br />
            ID: <input type="text" onChange={(e)=>setInputID(e.target.value)}/><br />
            PW: <input type="text" onChange={(e)=> setInputPW(e.target.value)}/><br />
            NICK: <input type="text" onChange={(e)=> setInputNICK(e.target.value)}/>
            <br />
            <input type="submit" value= "JOIN" onClick={tryJoin}/>
            <input type="submit" value="초기화"/>
    </div>
  )
}

export default Join