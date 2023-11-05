import React from 'react'
import './navbar.css'
import Cartwidget from '../cartwidget/cartwidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <Link to="/">Home</Link>
            <a>Tipo De Carta</a>
            <Link to="/Carrito"><Cartwidget/></Link>
        </div>
    </div>
  )
}

export default Navbar