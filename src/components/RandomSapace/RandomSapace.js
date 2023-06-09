import React from 'react'
    //import { useHistory } from 'react-router-dom'
    import { useNavigate } from 'react-router-dom'

// import './RandomSpace.css';
import data from '../../sfpopos-data.json'


function RandomSpace() {
    // const history = useHistory()
    const navigate = useNavigate();
  return (
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            
            // history.push(`/details/${id}`)
            navigate(`/details/${id}`)

        }}>Show me a random space</button>
  )
}


export default RandomSpace