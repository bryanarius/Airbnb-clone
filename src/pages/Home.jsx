import React from "react"
import Photo from '../../public/images/photo-grid.png'
import Card from "../components/Card"
import data from "../data"

export default function Home() {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })    

    return (
    <div>
        <section className="hero">
            <img src={Photo} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p> 
        </section>

        <section className="card-list">
                {cards}
         </section>
    </div>
    
    )
}