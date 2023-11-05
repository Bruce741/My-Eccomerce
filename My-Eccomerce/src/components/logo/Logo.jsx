import React from 'react'
import LogoIMG from '../../assets/Logo.webp'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={LogoIMG}/>
    </div>
  )
}

export default Logo