
import React from 'react';
import Band from './Band';
// import './BandList.css';
import data from './metal.json'




function BandList() {
  return (
    <div className="BandList">
      <Band
        band_name="50 California Street"
        fans="50 California St."
        formed="50-california-st.jpg"
        origin="bosnia"
      />
     
    </div>
  )
}





// const  band = data.map(( { ID, band_name, formed, origin, fans } ) => {
    // return (
  //     <Band
  //       ID={ID} // The title could be a key
  //       band_name={band_name}
  //       formed={formed}
  //       origin={origin}
  //       fans={fans}
  //     />
  //   )
  // })

export default BandList