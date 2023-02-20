import React from 'react'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import { propertiesContext } from '../App';


const Properties = () => {
  const {minPrice, maxPrice, searchLocation} = useContext(propertiesContext);
  interface Property {
    id: number;
    houseNumber: number;
    streetName: string,
    city: string,
    price:number,
    state: string,
    zip: number
  }
  let [displayProperties, setProperties] = useState<Property[]>([])

  useEffect(()=>{
    async function searchProperties() {
      await axios
          .get(
              `http://localhost:8000/properties/search?searchLocation=${searchLocation}&minValue=${minPrice}&maxValue=${maxPrice}`
          )
          .then((data) => setProperties(data.data));
    }
    searchProperties();
  },[])
  
  return (
    <div>
      {displayProperties.map((property) => (
        <div key={property.id} style={{ display: 'flex', marginBottom: '20px' }}>
          <img src={'../img1.png'} alt={property.streetName} style={{ marginRight: '20px', width: '400px' }} />
          <div>
            <h2 style={{ marginBottom: '10px' }}>{property.streetName}</h2>
            <p style={{ marginBottom: '10px' }}>{property.city}</p>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{`$${property.price} / night`}</p>
            <button style={{ backgroundColor: '#ff5a5f', color: '#fff', border: 'none', padding: '10px 20px' }}>Book now</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Properties