import React, { useLayoutEffect, useRef } from 'react'
import './UseLayout.css'
import Box from '../Components/Box'
const UseLayout = () => {
    const inputRef=useRef(null)
    useLayoutEffect(()=>{console.log(inputRef.current.value);},[])
  return (
    <>
    <Box name="Use Layout Hook"/>
    <div>
    <input ref={inputRef} value="Reatc.js" style={{color:"black",textAlign:"center"}}></input>   
    </div>
    </>
  )
}

export default UseLayout