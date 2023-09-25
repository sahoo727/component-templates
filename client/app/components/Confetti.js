"use client"

import React, {useState, useEffect} from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const detectSize = () =>{
    setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => { window.removeEventListener('resize', detectSize)}
  }, [windowDimensions])

  return (
    <div>
        <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        />
    </div>
  )
}

export default Confetti