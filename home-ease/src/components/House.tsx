import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';
import houseImage from '../assets/house.jpg';
import backyard from '../assets/backyard.jpg'
import livingroom from '../assets/livingroom.jpg';
import kitchen from '../assets/kitchen.jpg';
import bedroom from '../assets/bedroom.jpg';
import bathroom from '../assets/bathroom.jpg'
const House = () => {
    const { id } = useParams();
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
  return (
    <div className="App">
        <div style={{ textAlign: "center" }}>
            {/* <h2>React Carousel Minimal</h2>
            <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
            <div style={{
                padding: "0 20px"
            }}>
                <Carousel
                data={data}
                //time={2000}
                width="750px"
                height="400px"
                radius="10px"
                // slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                //automatic={true}
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
     </div>
  )
}

export default House