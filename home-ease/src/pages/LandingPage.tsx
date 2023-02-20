import React from 'react'
import homeEase1 from "../img1.png"
import homeEase2 from "../realtor.png"
import '../landingPage.css'
import Searchbox from '../components/Searchbox'
const LandingPage = () => {
  return (
    <>
        <h1 className='centered'>The easiest way to buy & sell houses</h1>
        <div className="container">
            <Searchbox />
            <div className='images'>
              {/* <img src={homeEase1} alt="" className='girl'/> */}
              <img src={homeEase2} alt="" className='selfieGuy'/>
            </div>
        </div>
    </>
  )
}

export default LandingPage