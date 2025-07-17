import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>홈페이지 입니다</h1>
        <a href='/about'>About 페이지 이동</a>
        <br />
        {/* 
        React 에서는 주소값 변경시 새로 고침이 되지 ㅇ낳는
        Link 사용을 추천
         */}
        <Link to='/about'>About 이동</Link>
    </div>
  )
}

export default Home