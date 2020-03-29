import React from "react";
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="logo">
                <img src="../../Images/PortfolioLogo.png" />
            </div>
            <div className="nav-links">
                <NavLink to="/">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Nav;