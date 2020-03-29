import React from "react";
import { NavLink, Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/">
                <div className="logo">
                    <img src="../../Images/PortfolioLogo.png" />
                </div>
            </Link>
            <div className="nav-links">
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Nav;