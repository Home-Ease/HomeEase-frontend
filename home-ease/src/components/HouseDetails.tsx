import React from 'react'
import "../houseDetails.css";
import { ReactComponent as Ac } from '../assets/ac.svg';
import { ReactComponent as Heating } from '../assets/heating.svg';
import { ReactComponent as Floor } from '../assets/floor.svg';
import { ReactComponent as Garage} from '../assets/garage.svg';
import { ReactComponent as Lotsize} from '../assets/lotsize.svg';
import { ReactComponent as Rooms} from '../assets/rooms.svg';
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import { PopupWidget } from "react-calendly";
import { Grommet, Button } from 'grommet';
interface Props {
    details?: {
        addressLine1: string,
        bathrooms: number,
        bedrooms: number,
        lotSize: number,
        floorCount: number,
        garage: boolean,
        lastSalePrice: number,
        lastSaleDate: string,
        squareFootage: number,
        propertyType: string,
        yearBuilt: string
        features?: {
            coolingType: string,
            heatingType: string,
            floorCount: string,
            garage: boolean,
            roomCount: number
        }
    },
    price: number,
    city: string,
}
const HouseDetails: React.FC<Props> = ({ details, price, city }) => {
    if (!details) {
        return <div>Loading...</div>;
    }
    const { addressLine1, bathrooms, bedrooms, lotSize, propertyType, yearBuilt,squareFootage } = details
    const coolingType = details.features?.coolingType || '';
    const heatingType = details.features?.heatingType || '';
    const floorCount = details.features?.floorCount || '';
    const garage = details.features?.garage || false;
    const roomCount = details.features?.roomCount
    // const {lotSize,coolingType, heatingType, floorCount,garage, lastSalePrice,lastSaleDate, squareFootage} =details.feature
    const rootElement = document.getElementById("root")!;
    console.log(details)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      });
      
     let dollarPrice = formatter.format(price)
    return (
       
        <Grommet>
            <div className='flex flex-row mx-40'>
                <div className='pr-80'>
                    <p className='address'>{addressLine1}</p>
                    <p className='mt-6 font-bold'>{city}</p>
                    <p className='mt-3 font-semibold'>{bedrooms} beds    {bathrooms} baths</p>
                </div>
                <div className='pl-30 price'>{dollarPrice}</div>
            </div>
            <div className='ml-20 mt-8'>
                <div>
                    <p className='font-semibold'>Description</p>
                    <p> This is a beautiful house</p>
                </div>
                <div className='highlightsBox mt-6'>
                    <p className='font-semibold ml-2'>Home Highlights</p>
                    <div className=" mt-4 ml-2 grid grid-flow-row-dense grid-cols-2 grid-rows-3">
                        <div className="col-span-1 flex">
                            <Ac className='icons' />
                            <span style={{ marginLeft: '10px' }}>Cooling</span>
                            <div style={{ marginLeft: '10px' }}>{coolingType}</div>
                        </div>
                        <div className="col-span-1 flex">
                            <Heating className='icons' />
                            <span style={{ marginLeft: '10px' }}>Heating</span>
                            <div style={{ marginLeft: '10px' }}>{heatingType}</div>
                        </div>
                        <div className='flex'>
                            <Floor className='icons' />
                            <span style={{ marginLeft: '10px' }}>Floors</span>
                            <div style={{ marginLeft: '10px' }}>{floorCount}</div>
                        </div>
                        <div className='flex'>
                            <Garage className='icons' />
                            <span style={{ marginLeft: '10px' }}>Parking</span>
                            <div style={{ marginLeft: '10px' }}>{garage?"Garage":"none"}</div>
                        </div>
                        <div className='flex'>
                            <Lotsize className='icons' />
                            <span style={{ marginLeft: '10px' }}>sqft</span>
                            <div style={{ marginLeft: '10px' }}>{squareFootage}</div>
                        </div>
                        <div className='flex'>
                            <Rooms className='icons' />
                            <span style={{ marginLeft: '10px' }}>Rooms</span>
                            <div style={{ marginLeft: '10px' }}>{roomCount}</div>
                        </div>
                    </div>
                </div>
                {/* <div className="App">
                    <InlineWidget url="https://calendly.com/josemazh" />
                </div> */}
                <div className="scheduleBttn mt-6 mb-6">
                    <PopupButton
                        url="https://calendly.com/josemazh"
                        rootElement={rootElement}
                        text="Schedule a tour"
                    />
                </div>
            </div>
        </Grommet>
    )
}

export default HouseDetails