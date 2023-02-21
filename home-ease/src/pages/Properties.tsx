import React from 'react'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react'
import { propertiesContext } from '../App';
import Property from '../components/Property';
import { Link} from 'react-router-dom';
import House from '../components/House';
const Properties = () => {
  const {minPrice, maxPrice, searchLocation} = useContext(propertiesContext);
  interface propertyObj {
    id: number;
    houseNumber: number;
    streetName: string,
    city: string,
    price:number,
    state: string,
    zip: number
  }
  let [displayProperties, setProperties] = useState<propertyObj[]>([])

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
    <div className='pt-3 sm:pt-7'>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 lg: lg:grid-cols-4 xl:grid-cols-4 gap-4'>{displayProperties.map((property) => (
        <Link to={`/house/${property.id}`}><Property key={property.id}
          title={property.streetName} 
          image='../assets/house.jpg' 
          price={property.price}
        /></Link>
      ))}
      </div>
    </div>
  )
}

export default Properties