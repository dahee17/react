import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const [query, setQuery] = useSearchParams();
    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
  

    const nav= useNavigate();
      // console.log(query.get('id'))
      // console.log(query.get('pw'))
      // console.log(query.get('nick'))
    const tryLogin=()=>{
      // console.log(inputID)
      // console.log(inputPW)
      if( inputID === query.get('id') && inputPW === query.get('pw')){
        // alert('로그인 성공입니다')
        // 로그인 성공 페이지로 이동 코드
        nav(`/logins?nick=${query.get('nick')}`);
      }
      else{
        // alert('로그인 실패입니다')
        // 로그인 실패 페이지로 이동 코드
        nav('/loginf')
      }

        //nav('/random')
    }

  return (
    <div>
        <h1>절거운 React 수업</h1>
        <br />
          ID: <input type="text" onChange={(e)=> setInputID(e.target.value)}/>
          <br />
          Pw: <input type="text" onChange={(e)=> setInputPW(e.target.value)}/>
          <br />
          <input type="submit" value="로그인시도" onClick={tryLogin}/>
    </div>
  )
}

export default Login