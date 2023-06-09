import React from 'react'
//import { env } from 'process';
import './POPOSDetails.css'

// import data from '../../sfpopos-data.json'
import data from '../../sfpopos-data.js'
import POPOSFeatureList from '../POPOSFeatures/POPOSFeatureList'

import { useParams } from 'react-router-dom'

function POPOSDetails(props) {
  
  const { id } = useParams();
     // const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <p className="POPOSDetails-features">{ features }</p>
        
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>

      </div>
    </div>
  )

}

export default POPOSDetails