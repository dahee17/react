import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const MyAxios = () => {
    const[movieData, setMovieData] = useState([])
    const getData = () => {
        // axios 사용해서 데이터 가져오기 
        axios({
            // url : 통신할 서버의 주소
            url : '	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c0ef14410b99bf82254372164554ce08&targetDt=20120101',
            method : 'GET'
        })
        .then((res)=>{
            // 통신 성공시 실행할 로직
            console.log('통신성공')
            console.log(res.data.boxOfficeResult.boxofficeType)
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)
            
            setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)

        
        })
    }


    return (
    <div>
        <h1>영화 데이터 비동기 통신(Axios)</h1>
        <button onClick={getData}>데이터 가져오기</button>
        <table border={1}>
            <tbody>
            <tr>
                <td>영화순위</td>
                <td>제목</td>
                <td>개봉일</td>
            </tr>
            {/* 영화정보 출력 */}
            {/* JSX에서 숫자, 문자열, 날짜 는 바로 출력 가능
                객체는 출력 불가능 
            */}
            {movieData}
          </tbody>  
        </table>
    </div>
  )
}

export default MyAxios