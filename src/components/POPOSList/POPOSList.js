import React, { useState } from 'react'

import './POPOSList.css';
import POPOSSpace from '../POPOSSpace/POPOSSpace';

//import data from '../../sfpopos-data.json';
import data from '../../sfpopos-data.js'

function POPOSList() {

	   const [ query, setQuery ] = useState('')
        
	   const spaces = data
	        .filter((obj) => {
				// true if query is in title
				const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
				// true if query is in address
				const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
				// return true if either is true
				return inTitle || inAddress	})
            .map(( { id, title, address, images, hours }, i ) => {
			return (
				<POPOSSpace
                	id={id} // use id here
					key={`${title}-${id}`} // use id here
					name={title}
					address={address}
					image={images[0]}
					hours={hours}
				/>
			)
		  })
		  
		return (
			<>
			<div className="divform">
					<form>
						<input
							value={query}
							placeholder="search"
							onChange={(e) => setQuery(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>	
			<div className="POPOSList">
					{spaces}
			</div>
			</>
			
		  )
		
  }

export default POPOSList