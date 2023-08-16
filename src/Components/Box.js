import React from 'react'
import './Box.css'
const Box = (props) => {
  return (
    <>
        <div className='box'> 
            <div className='head'>
                <h1>{props.name}</h1>
            </div>
            <div className='content'>            
            </div>
        </div>
    </>
  )
}

export default Box