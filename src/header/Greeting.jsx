import React from 'react'

function greeting({name}) {
    
  return (
    <div className=' w-7 bg-blue-400'>
        <h2>Hey there, {name}</h2>
    </div>
  )
}

export default greeting