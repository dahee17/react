import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



const MyAxios = () => {

    const [date, setDate] = useState('')

    //  1. 맨 처음 페이지에 들어가게 되면 2020년01월01일 기준으로 영화데이터 출력
    //  --> useEffect(맨처음 랜더링됐을 때, 재랜더링 됐을때 -> state값이 바뀌었을 때) 
    useEffect(()=>{
         axios({
            // url : 통신할 서버의 주소
            url : '	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c0ef14410b99bf82254372164554ce08&targetDt=20200101',
            method : 'GET'
            
        })
        .then((res)=>{
            // 통신 성공시 실행할 로직
            console.log('통신성공')
            console.log(res)
            console.log(res.data.boxOfficeResult.boxofficeType)
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)
            
            setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)    
        })
    }, [])

    const[movieData, setMovieData] = useState([])
    const getData = () => {
        // axios 사용해서 데이터 가져오기 
        axios({
            // url : 통신할 서버의 주소
            url : '	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c0ef14410b99bf82254372164554ce08&targetDt='+date,
            method : 'GET'
            
        })
        .then((res)=>{
            // 통신 성공시 실행할 로직
            console.log('통신성공')
            console.log(res)
            console.log(res.data.boxOfficeResult.boxofficeType)
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)
            
            setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)    
        })


    }

    
    return (
    <div>
        <h1>영화 데이터 비동기 통신(Axios)</h1>
        <input onChange={(e)=>setDate(e.target.value)} type="text" />
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
            {/* 
            map : 배열 안에 요소를 한 번식 순차적으로 전부 접근해서
             모든 항목의 데이터를 원하는 형식으로 바꿔주는 함수
            item : map 함수를 통해서 접근한 배열의 요소
            index : item에 대응되는 배열의 인덱스
            */}
            {movieData.map((item, index)=>
                <tr key = {index}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                </tr>
            )}
          </tbody>  
        </table>
    </div>
  )
}

export default MyAxios
