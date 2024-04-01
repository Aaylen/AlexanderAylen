import React from 'react'

function LoadingText() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
      }}
    >
      The Cube is loading!
      <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -45%)',
        zIndex: 1,
        color: 'white',
        fontSize: '12px',
        textAlign: 'center',
      }}
    >
      try refreshing if it is taking too long -- sorry!
    </div>
    </div>
  )
}

export default LoadingText