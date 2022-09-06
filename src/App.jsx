import './App.css'
import React from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from './components/Footer'
import data from "./data"

export default function App() {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })        

    return (
        <div className="container">
            <Navbar />
            <Hero />
    
            <section className="card-list">
                {cards}
            </section>

            <Footer />
            
 
        </div>
    )
}