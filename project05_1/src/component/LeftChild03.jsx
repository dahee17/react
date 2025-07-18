import React from 'react'
import { useContext } from 'react'
import { AppText } from '../App'

const LeftChild03 = () => {
    const share = useContext(AppText)
    const hadlecnt =() => {
        share.setCnt(share.cnt +1)
    }
  return (
    <div>
        <h1>Left03</h1>
        <button onClick={hadlecnt}>PLUS</button>
    </div>
  )
}

export default LeftChild03