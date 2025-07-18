import React from 'react'
import { useContext } from 'react'
import { AppText } from '../App'
import { use } from 'react'

const Left03 = () => {
    const share = useContext(AppText)
    // {
    //    data: myData, 
    //    setData :setMyData
    // }

    return (
    <div>
        <h1>LEFT03</h1>
        <input onChange={(e)=> share.setData(e.target.value)}/>
    </div>
  )
}

export default Left03