import React from 'react'
import homeEase2 from "../assets/realtor.png"
import '../landingPage.css'
import Searchbox from '../components/Searchbox'
const LandingPage = () => {
  return (
    <>
        <h1 className='flex items-center justify-center mt-36 text-2xl centered'>The easiest way to buy & sell houses</h1>
        <div className="mt-8 container">
            < Searchbox />
            <div className='images'>
              {/* <img src={homeEase1} alt="" className='girl'/> */}
              <img src={homeEase2} alt="" className='selfieGuy'/>
            </div>
        </div>
    </>
  )
}

export default LandingPage