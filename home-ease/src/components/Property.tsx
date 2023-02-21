import React from 'react'
import '../property.css'
import houseImage from '../assets/house.jpg'
interface PropertyProps {
    title: string;
    image: string;
    price: number
}
const Property = ({title, image, price}:PropertyProps) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      });
      
     let dollarPrice = formatter.format(price)
  return (
    <div className=''>
        <div className='relative'>
            <div className='grad absolute w-full h-full rounded-b-[1.3rem]'></div>
            <div className='flex '>
                <img  src={houseImage} alt="" className='object-cover rounded-[1.3rem] sm:h-[18rem] md: h-[18rem] w-full'/>
                <div className='absolute text-white font-bold bottom-6 left-6 text-[22px]'>
                    {title}
                    <p className='text-[18px]'>{dollarPrice}</p>
                </div>
            </div>  
        </div>
        <div className='description pt-3'>
           <p className='max-w-[17rem]  text-[18px]'> 4 beds 3 baths</p>
        </div> 
    </div>
    
  )
}

export default Property