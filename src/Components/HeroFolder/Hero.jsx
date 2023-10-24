import React from 'react'
import './hero.scss'
import vtappLogo from '../../assets/old_vtapp_logo.svg'

const Hero = () => {

  return (
    <>
    <div className='hero-back'>

      <div className='hero-top'>
        <img src={vtappLogo}/><div />
      </div>
      <div className='hero-center'>
        <center><h1>vTAPP<br/>2023</h1></center>
        <center><p>COMMING SOON</p></center>
      </div>
      <div className='hero-bottom'>
        <div /><p>9<sup>th</sup> & 10<sup>th</sup> December</p>
      </div>
    </div>
    </>
  )
}

export default Hero