import React from 'react'
import './navbar.css'
import Cartwidget from '../cartwidget/cartwidget'

const navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <a>home</a>
            <a>Tipo De Carta</a>
            <Cartwidget/>
        </div>
    </div>
  )
}

export default navbar