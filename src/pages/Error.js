import React from 'react';

const Error = () => {
    return (
        <div className="fullwidth-section oops">
            <div className="oops-image">
                <img src="../../Images/LaughingEmojis.png" />
            </div>
            <div className="oops-content">
                <h1>Oops!</h1>
                <h3>No page was found, but don't get mad, just visit one of the pages below:</h3>
                <div className="page-buttons">
                    <a href="/" target="_blank"><button>About</button></a>
                    <a href="/portfolio" target="_blank"><button>Portfolio</button></a>
                    <a href="/contact" target="_blank"><button>Contact</button></a>
                </div>
            </div>
        </div>

    );
}

export default Error;