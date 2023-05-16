import React from 'react'
import './POPOSSpace.css'
import {Link} from 'react-router-dom';

//import logo from './logo.svg'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
      <div 
      className="POPOSSpace-title" // add a class name!
      >
         <h1>
            <Link to={`/details/${id}`}>
              {name}
            </Link>
          </h1>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
        
        <div className="POPOSSpace-info">
            <div >{address}</div>
            <div>{hours}</div>
        </div>
         
          <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
          </Link>
          
      </div>
      
    )
}


export default POPOSSpace