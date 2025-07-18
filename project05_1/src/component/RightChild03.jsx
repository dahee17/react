import React from 'react'
import { useContext } from 'react'
import { AppText } from '../App'

const RightChild03 = () => {
    const share = useContext(AppText)
  return (
    <div>
        <h1>Right03</h1>
        <p>{share.cnt}</p>
    </div>
  )
}

export default RightChild03