import React from 'react'
import img1 from '../img/img1.png'
import {useState} from 'react'


const MyInsta = () => {

    /* React에서 이미지를 띄우는 방법 3가지
        1. 외부 주소 사용
        2. src 폴더 사용
            - import 별칭 from '경로'
            - 장점 : 경로 처리에 유리하다
            - 단점 : 여러 개의 이미지를 한 번에 가져올 때 불편함
            - 로고나 컴포넌트에 늘 떠있는 이미지를 사용할 때 추천
        
        3. public 폴더 사용
            - public 폴더는 폴더 그 자체로 이미 서버와 통신 중
            - public 폴더에 자료를 보관하는 것 만으로도 이미
                본인의 주소가 생김
                => "http://localhost:5173/img/img.jpg"
                => "/img/img.jpg" (생략가능)
            - 장점 : 동적 접근이 쉽다. 파일 변경에 용이함
            - 단점 : 불필요하게 public 폴더의 파일들이 노출
                    => 민감한 파일, 사내 중요 이미지 등 보안이 필요한 이미지X
                       경로 오류가 있더라도 배포단계에서 잡아내지 못함
       
    */

    // 실습 문제 
    // 1. 하트 클릭했을때 실행 될 함수 handeLike를 생성 - onClick
    // 2. handleLike 실행시
    // 2-1) 흰색하트 : 흰 -> 빨강 / 0->1
    // 2-1) 빨강하트 : 빨강 -> 흰 / 1->0

    // 조건 : 값이 바뀔 때 마다 화면이 바로바로 바뀜
    //  - 사용되는 state 이름은 emoji(하트), likeNum(숫자)
    //  - if문 사용


    const [emoji, setemojiState] = useState('🤍');
    const [likeNum, setlikeNumState] = useState(0);

    function handleLike(){
        if(likeNum == 0){
            setlikeNumState(1)
            setemojiState('❤️')
        }
        else {0
            setlikeNumState(0)
            setemojiState('🤍')
        }
    }
    

  return (
    <div>
        <img width= '300px' src={img1}/>
        {/* <img src="http://localhost:5173/img/img.jpg"/> */}
        <p>
            <span onClick={handleLike}>{emoji}</span>
            {" "}
            좋아요
            <span>{likeNum}</span>
            개
        </p>
    </div>
  )
}

export default MyInsta