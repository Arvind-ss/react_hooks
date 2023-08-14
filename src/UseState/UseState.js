import React from 'react'
import { useState } from 'react'
import'./UseState.css'

const UseState = () => {
    const[counter,setCounter]=useState(0)
    const dec=()=>{

        setCounter(counter-1)
    }
    const inc=()=>{
        
        setCounter(counter+1)
    }
  return (
    
    <>
    
        <div className='box'> 
            <div className='head'>
                <h1>Use State Hook</h1>
            </div>
            <div className='content'>
                <button className='dec' onClick={dec}>Decrease</button>
                <h1 className='text'>{counter}</h1>
                <button className='inc' onClick={inc}>Increase</button>
            </div>
        </div>
    </>
  )
}

export default UseState