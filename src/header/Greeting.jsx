import React from 'react'

function Greeting({name}) {
    
  return (
    <div className=' w-7 bg-blue-400 flex'>
        <h2>Hey there, {name}</h2>
    </div>
  )
}

export default Greeting