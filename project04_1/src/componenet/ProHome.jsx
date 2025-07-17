import React from 'react'

import { useNavigate } from 'react-router-dom'

const ProHome = () => {

    const nav = useNavigate();

    const tryDetial = (e)=> {
    //    e.target : 이벤트를 발생시킨 주체(태그)
        // 쿼리스티링 : 주소 ? key:value
        console.log(e.target.value)
        nav('/prodetail?num=' + e.target.value)
    }

    // const tryDetial2 = ()=> {
    //     // 쿼리스티링 : 주소 ? key:value
    //     nav('/prodetail?num=2')
    // }

  return (
    <div>
        <button value="1" onClick={tryDetial}>1번째 상세보기</button>
        <hr />
        <button value="2" onClick={tryDetial}>2번째 상세보기</button>
        <hr />
        <button value="3" onClick={tryDetial}>3번째 상세보기</button>
    </div>
  )
}

export default ProHome