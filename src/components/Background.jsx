import React from 'react'
import "./Background.css";
function Background() {
  return (
    // <div className='container'>
    //     <div className='starry-background'></div>
    //     <div className='Loading Text'></div>
    // </div>
    <div className='starry-background'>
        <div className='loading-text'>
            <h1>THE CUBE</h1>
            <h1>IS</h1>
            <h1>LOADING</h1>
        </div>
        <div className='instructions'>Click and drag to move the cube</div>
    </div>
  )
}

export default Background