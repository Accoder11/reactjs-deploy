import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './css/landing.css'


const App = () => {
    return(
        <div className="bg-warning bg-gradient">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
    )
}

export default App;