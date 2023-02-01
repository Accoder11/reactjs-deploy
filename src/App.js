import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import './css/landing.css'
import AboutUs from './Component/AboutUs';
import Categories from './Component/Categories';
import Shop from './Component/Shop';


const App = () => {
    return(
        <div className="App bg-light bg-gradient">
            <Header></Header>
            <Routes>
                <Route path='/' element={ <Main/> } />
                <Route path='categories' element={ <Categories/> } />
                <Route path='shop' element={ <Shop/> } />
                <Route path='about' element={ <AboutUs/> } />
            </Routes>
            <Footer></Footer>
        </div>
    )
}

// header and footer are constant unlike those inside "ROUTES"

export default App;