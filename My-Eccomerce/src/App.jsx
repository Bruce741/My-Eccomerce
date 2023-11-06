// Components
import Navbar from './components/navbar/navbar'
import Logo from './components/logo/Logo'
import { useState } from 'react'

// CSS 
import './App.css'

// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Views
import CartPage from './views/cartPage/CartPage'
import HomePage from './views/homePage/HomePage'
import DetailPage from './views/detailPage/DetailPage'
import CategoryPage from './views/categoryPage/CategoryPage'


const App = () => {

  return (
    <Router>
    <div className='app'>

      <Logo/>
      <Navbar/>

    
      <Routes>
	    <Route path="/" element={<HomePage />}/>
      <Route path="/Carrito" element={<CartPage />}/>
      <Route path="/DetailPage/:id" element={<DetailPage />}/>
      <Route path="/CategoryPage" element={<CartPage />}/>
      </Routes>

    </div>
    </Router>
  )
}

export default App
