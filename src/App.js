import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Main from './pages/Main'
import Footer from './Component/Footer'
import './css/landing.css'
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import Shop from './pages/Shop';
import Products from './pages/Products'


const App = () => {
    return(
        <div className="App bg-light bg-gradient">
            <Header></Header>
            <Routes>
                <Route path='/' element={ <Main/> } />
                <Route path='categories' element={ <Categories/> } />
                <Route path='shop' element={ <Shop/> } />
                <Route path='products' element={ <Products/> } />
                <Route path='about' element={ <AboutUs/> } />
            </Routes>
            <Footer></Footer>
        </div>
    )
}

// header and footer are constant unlike those inside "ROUTES"

export default App;