import React from 'react'
import axios from 'axios'

const MyAxios = () => {
    
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
        })
    }

    return (
    <div>
        <h1>영화 데이터 비동기 통신(Axios)</h1>
        <button onClick={getData}>데이터 가져오기</button>

    </div>
  )
}

export default MyAxios