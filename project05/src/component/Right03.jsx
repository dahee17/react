import React from 'react'

// useContext : createContext로 만들어진 공유 공간에 접근할 수 있는 기능
import { useContext } from 'react'
// 주의! 어떤 공유 공간을 사용할 껀지 명시해줘야한다
import { AppText } from '../App'

const Right03 = () => {
    // 공유 공간에 접근해서 값을 가지고 오겠다
      const shareData = useContext(AppText)
      console.log(shareData)
    return (
    <div>
        <h1>RIGHT03</h1>
        <h1>{shareData.data}</h1>
    </div>
  )
}

export default Right03