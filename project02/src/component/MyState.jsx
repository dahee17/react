import React from 'react'
// useState : state변수를 만들 수 있는 react 기능(Hook)
import {useState} from 'react'

function MyState() {
    // 사용자의 로직에 처리되는 일반변수
    let num = 0;
    // state 변수 : 화면적인 요소를 다룰 변수
    // numState : state 변수
    // setnumState : state 변수를 바꿀 수 있는 기능
    const [numState, setNumState] = useState(0);
    function plus(){
        setNumState(numState+1)
    }
  return (
    <div>
        <h1>{numState}</h1>
        <button onClick={plus}>PLUS</button>
    </div>
  )
}

export default MyState