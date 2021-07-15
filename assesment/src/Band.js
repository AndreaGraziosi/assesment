// src/Project.js  

import React from 'react'
// import logo from './logo.svg'

function Band(props) {
    const {band_name, formed, origin, fans}=props
  return (
    <div>
      
      <h3>Band name: {band_name}</h3>
      <p>Formed: {formed}</p>
      <p>Origin: {origin}</p>
      <div>Fans: {fans}</div>
    </div>
  )
}

export default Band
