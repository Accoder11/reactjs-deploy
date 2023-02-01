import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Main from './pages/Main'
import Footer from './Component/Footer'
import './css/landing.css'
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import Shop from './pages/Shop';
import Products from './pages/Products'
import Mens from './Component/MenSection';
import Womens from './Component/WomenSection';
import Kids from './Component/KidsSection';

const App = () => {
    return(
        <div className="App bg-light bg-gradient">
            <Header></Header>
            <Routes>
                <Route path='/' element={ <Main/> } />
                <Route path='categories' element={ <Categories/> } />

                <Route path='mens-section' element={ <Mens/> } />
                <Route path='womens-section' element={ <Womens/> } />
                <Route path='kids-section' element={ <Kids/> } />

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