// Components
import Navbar from './components/navbar/navbar'
import Logo from './components/logo/Logo'
import { useState } from 'react'

// Context 
import { createContext } from "react";

// CSS 
import './App.css'

// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Views
import CartPage from './views/cartPage/CartPage'
import HomePage from './views/homePage/HomePage'
import DetailPage from './views/detailPage/DetailPage'
import CategoryPage from './views/categoryPage/CategoryPage'

export const CartasContext = createContext();

const App = () => {

  const [cartasPedidas, setCartasPedidas] = useState([])

  

  return (
    <CartasContext.Provider value={{cartasPedidas, setCartasPedidas}}>
    <Router>
    <div className='app'>

      <Logo/>
      <Navbar/>
  
    
      <Routes>
	    <Route path="/" element={<HomePage />}/>
      <Route path="/Carrito" element={<CartPage />}/>
      <Route path="/DetailPage/:id" element={<DetailPage />}/>
      <Route path="/CategoryPage/:tipo" element={<CategoryPage />}/>
      </Routes>

    </div>
    </Router>
    </CartasContext.Provider>
  )
}

export default App
