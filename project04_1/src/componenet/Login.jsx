import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [query, setQuery] = useSearchParams();
    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
  

    const nav= useNavigate();
      // console.log(query.get('id'))
      // console.log(query.get('pw'))
      // console.log(query.get('nick'))
    const tryLogin=()=>{
      // 1. 사용자가 입력한 ID, PW -> node 서버로 전송
      // 2. 노드 서버에서는 넘겨받은 ID, PW가 DB에 있다면 1을 반환 --> LonginS
      //    넘겨받은 ID, PW가 없다면 0을 반환 --> LoginF
      axios({
        url : 'http://localhost:3001/user/login',
        method : 'post', 
        data: {
          id : inputID, 
          pw : inputPW
        }
      })
      .then((res)=>{
        if(res.data === 1) nav('/loginS')
        else nav('/loginF')
      }

      )


      // console.log(inputID)
      // console.log(inputPW)
      // if( inputID === query.get('id') && inputPW === query.get('pw')){
      //   // alert('로그인 성공입니다')
      //   // 로그인 성공 페이지로 이동 코드
      //   nav(`/logins?nick=${query.get('nick')}`);
      // }
      // else{
      //   // alert('로그인 실패입니다')
      //   // 로그인 실패 페이지로 이동 코드
      //   nav('/loginf')
      }

        //nav('/random')
    


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