
import React from 'react';
import Band from './Band';
import './BandList.css';
import data from './metal.json'


function BandList() {

  const bands = data.map((obj) => {
    return (
      <Band
        key={obj.band_name}
        band_name={obj.band_name}
        formed={obj.formed}
        origin={obj.origin}
        fans={obj.fans}
      />
    )
  })

  return (
    <div className="BandList">
      { bands }
    </div>
  )
  }
export default BandList;



