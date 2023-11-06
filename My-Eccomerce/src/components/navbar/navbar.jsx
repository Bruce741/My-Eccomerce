import React from 'react'
import './navbar.css'
import Cartwidget from '../cartwidget/cartwidget'
import { Link } from 'react-router-dom'
import SelectMenu from '../SelectMenu/SelectMenu'


const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <Link to="/">Home</Link>
            <SelectMenu/>
            <Link to="/Carrito"><Cartwidget/></Link>
        </div>
    </div>
  )
}

export default Navbar