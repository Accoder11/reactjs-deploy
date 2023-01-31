import React, { Component } from 'react';
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import './css/landing.css'


const App = () => {
    return(
        <div className="bg-light bg-gradient">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
    )
}

export default App;