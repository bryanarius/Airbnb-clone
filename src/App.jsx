import './App.css'
import React from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Footer from './components/Footer'

export default function App() {
    // <Route path="/" element={<Hero />} />

    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                
            </Routes>

            <Footer />
            
 
        </div>
    )
}