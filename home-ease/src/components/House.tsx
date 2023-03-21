import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';
import houseImage from '../assets/house.jpg';
import backyard from '../assets/backyard.jpg'
import livingroom from '../assets/livingroom.jpg';
import kitchen from '../assets/kitchen.jpg';
import bedroom from '../assets/bedroom.jpg';
import bathroom from '../assets/bathroom.jpg';
import axios from 'axios';
import { stateAbbreviations } from './StateAbbreviations';
import HouseDetails from './HouseDetails';

const House = () => {
    const { id } = useParams();
    const [house,setHouse] = useState();
    const [houseDetails,setHouseDetail] = useState();

    useEffect(()=>{
      async function getProperty(){
        await axios.get(`http://localhost:8000/property/${id}`).then(data => setHouse(data.data))
      }
      getProperty()
    },[])
    
    interface houseProps{
      houseNumber?: string,
      streetName?: string,
      city: string,
      state?: string,
      zip?: string,
      price: number
    }
    
    const {houseNumber, streetName, city, state, zip,price}: houseProps = house??{price:0,city:''}
    
  
    const options = {
      method: 'GET',
      url: 'https://realty-mole-property-api.p.rapidapi.com/properties',
      params: {address: `${houseNumber} ${streetName}, ${city}, ${state}, ${zip}`},
      headers: {
        'X-RapidAPI-Key': 'c936b82e70msh983293dad2515dap15069ajsncaf8ff6e293c',
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
      }
    };
    
    useEffect( ()=>{
      
        axios.request(options).then( res => setHouseDetail(res.data[0])).catch(function (error) {
          console.error(error);
        });
   
    })
  

    const data = [
        {
          image: houseImage
        },
        {
          image: backyard
        },
        {
          image: livingroom
        },
        {
          image: kitchen
        },
        {
          image: bedroom
        },
        {
          image: bathroom
        }
      ];
     
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      interface HouseDetailsProps {
        details?: any;
      }
  return (
    <div className="App">
        <div style={{ textAlign: "center" }}>
            <div style={{
                padding: "0 20px"
            }}>
                <Carousel
                data={data}
                width="750px"
                height="400px"
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                automatic={false}
                captionPosition="bottom"
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                     margin: "40px ",
                }}
                />
            </div>
        </div>
        <HouseDetails details={houseDetails} price={price} city={city} />
     </div>
  )
}

export default House