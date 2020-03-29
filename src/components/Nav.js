import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="logo">
                <img src="../../Images/PortfolioLogo.png" />
            </div>
            <div className="nav-links">
                <a className="navbar-brand" href="/">
                    About
                </a>
                <a className="navbar-brand" href="/portfolio">
                    Portfolio
                </a>
                <a className="navbar-brand" href="/contact">
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Nav;