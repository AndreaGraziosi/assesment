// src/Project.js  

import React from 'react'
// import logo from './logo.svg'

function Band(props) {
    const {band_name, formed, origin, fans}=props
  return (
    <div>
      
      <h3>{band_name}</h3>
      <p>{formed}</p>
      <p>{origin}</p>
      <div>{fans}</div>
    </div>
  )
}

export default Band
