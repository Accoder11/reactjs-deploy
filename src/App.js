import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import './css/landing.css'
import AboutUs from './Component/AboutUs';



const App = () => {
    return(
        <div className="App bg-light bg-gradient">
            <Routes>
                <Route path='/' element={ <Header/> } />
                <Route path='main' element={ <Main/> } />
                <Route path='about' element={ <AboutUs/> } />
                <Route path='footer' element={ <Footer/> } />
            </Routes>
        </div>
    )
}

export default App;