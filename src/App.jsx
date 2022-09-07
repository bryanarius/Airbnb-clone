import './App.css'
import React from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from './components/Footer'

export default function App() {
    // <Route path="/" element={<Hero />} />

    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

            <Footer />
            
 
        </div>
    )
}