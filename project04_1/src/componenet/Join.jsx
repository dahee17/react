import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

const Join = () => {

    const nav= useNavigate();

    const [inputID, setInputId] = useState('');
    const [inputPW, setInputPw] = useState('');
    const [inputName, setInputName] = useState(''); 
    const [inputMbti, setInputMbti] = useState('');
    const [inputSong, setInputSong] = useState('');

    const tryJoin = () => {
      // console.log(inputID)
      //  사용자가 입력한 id, pw, nick
      // 쿼리스트링으로 주소에 추가해주자!
      // 쿼리스트링 구조 : 주소 ? key1=value1&key2=value2&key3=value3
        // nav('/login?id='+ inputID+ '&pw='+inputPW )
  
        axios({
          url : 'http://localhost:3001/user/join',
          method : 'post',
          data:{
            id : inputID, 
            pw : inputPW, 
            name : inputName, 
            mbti : inputMbti,
            song : inputSong
          }
        })
        .then((res)=>{
          // 통신 후 실행 시킬 로직
          console.log(res)
          // 회원가입에 성공했다면 --> 로그인페이지
          if(res.data == 1){nav('./login')}
          // 회원가입에 실패했다면 --> alert('회원가입 실패')
          else{alert('회원가입 실패')}
        })
        
        
        // nav(`/login?id=${inputID}&pw=${inputPW}&nick=${inputNICK}` )
      }

  return (
    <div>
        <h1>절거운 React 수업</h1>
        <br />
        <h1>회원가입 페이지 입니다</h1>
        <br />
            ID: <input type="text" onChange={(e)=>setInputId(e.target.value)}/><br />
            PW: <input type="text" onChange={(e)=> setInputPw(e.target.value)}/><br />
            NICK: <input type="text" onChange={(e)=> setInputName(e.target.value)}/><br />
            MBTI : <input type="text" onChange={(e)=>setInputMbti(e.target.value)} /> <br />
            SONG : <input type="text" onChange={(e)=>setInputSong(e.target.value)}/> <br />
            <input type="submit" value= "JOIN" onClick={tryJoin}/>
            <input type="submit" value="초기화"/>
    </div>
  );
}

export default Join