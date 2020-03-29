import React, { useRef } from "react";
import { useProjectContext } from "../utils/GlobalState";

function About() {
  const inputRef = useRef();
  const [_, dispatch] = useProjectContext();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Let Me Introduce Myself</h1>
      <div class="about-container">
        <div className="image col">
          <img src="https://mandytorrence.com/wp-content/uploads/2019/04/MandyTorrence-AboutMeImage.png" />
        </div>
        <div class="bio col">
          <h2>Mandy Torrence</h2>
          <h4>Web Designer & Developer</h4>
          <p>Raleigh, North Carolina is my home. I was a Political Science major at NC State University and worked for the North Carolina Secretary of State while I went through school. No matter what job I had I always ended up doing the graphics for an event, campaign or website. I was working at WRAL in the TV division, when an opportunity became available to work as a graphic designer for WRAL Digital Solutons.</p>
          <p>Graphic deisgn has given me the opportunity to work on a wide range of projects. From print materials, digital ad campaigns, branding and logos, to websites, and apparel; I have gotten to work on it all. While I enjoy it all I have a fondness for websites. Websites are where you get to show your personallty. It's a place for a company to create a relationship with their users and clients. If done well it can be the best resource a company has.</p>
          <p>In my free time I have many hobbies. I enjoy cake decoration, sewing, wood working, hiking, and travel amoungst other things. My husband and I travel whenever we get the opportunity. We most recently went to Scotland and Greece. The only thing we don't enjoy about travel is leaving our pups at home.</p>
        </div>
      </div>
      <div className="fullwidth-section">
        <div className="portfolio-preview"><a href="/portfolio">See My Portfolio</a></div>
        <div className="contact-preview"><a href="/contact">Contact Me Today</a></div>
      </div>
    </div>
  );
}

export default About;
