import React from "react"
import Photo from '../../public/images/photo-grid.png'
import Card from "../components/Card"
import Woman from '../../public/images/woman.png'
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

        <section className="woman">
        <img src={Woman} className="woman--photo" />
        <div>
            <h3>Try Hosting</h3>
            <p>earn up to $2,755/month by sharing your space in Jacksonville</p>
            <button className="dark--button">Learn More</button>
        </div>
        </section>

        <section >
            <h3>Just booked in the last 24 hours</h3>
            <div className="card-list">
                {cards}
            </div>
         </section>
    </div>
    
    )
}