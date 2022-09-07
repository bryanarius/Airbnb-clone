import React from "react"
import {Link} from "react-router-dom"
import Logo from '../../public/images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src={Logo}className="nav--logo" />
            </Link>
            <Link to="/becomeahost"><p>Become a Host</p></Link>
            <Link to="/help"><a>Help</a></Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>       
        </nav>
    )
}