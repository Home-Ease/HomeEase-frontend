import React from 'react'
import homeEase1 from "../img1.png"
import homeEase2 from "../img2.png"
import '../landingPage.css'
import Searchbox from './Searchbox'
const LandingPage = () => {
  return (
    <>
        <h1 className='centered'>The easiest way to buy and sell houses</h1>
        <div className="container">
            <Searchbox />
            <div className='images'>
              <img src={homeEase1} alt="" className='girl'/>
              <img src={homeEase2} alt="" className='selfieGuy'/>
            </div>
        </div>
        {/* <img className='bg' src = {homeEase} /> */}
        {/* <h1>The easiest way to buy & sell houses</h1> */}
    </>
  )
}

export default LandingPage