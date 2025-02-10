import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css"; // Import the CSS file for styling
import Logo from "../assets/Service-logo.jpg";
const Landingpage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav id="menu" className="navbar">
        <div className="container">
          <div className="navbar-header">
            {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> */}
            {/* <span className="icon-bar"></span> */}
            {/* <span className="icon-bar"></span> */}
            {/* <span className="icon-bar"></span> */}
            {/* </button> */}
            <a className="navbar-brand" href="#home">
              React Landing Page
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav-links">
              <li>
                <a href="#features">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Gallery</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button className="signup-btn" onClick={handleSignup}>
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Welcome to Our Landing Page</h1>
        <p>Discover amazing features and services</p>
        <button className="hero-btn" onClick={handleSignup}>
          Get Started
        </button>
      </header>

    <section id="about" className="about-container">
      <div className="about-content">
        {/* Left: Image */}
        <div className="about-image">
          <img src={Logo} alt="About Us" />
        </div>

        {/* Right: Text Content */}
        <div className="about-text">
          <h1 className="about-title">
            ABOUT US <span className="underline"></span>
          </h1>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="about-subtitle">Why Choose Us?</h3>
          
          {/* Why Choose Us - Two Column List */}
          <div className="about-list">
            <ul>
              <li>✔ Lorem ipsum dolor</li>
              <li>✔ Tempor incididunt</li>
              <li>✔ Lorem ipsum dolor</li>
              <li>✔ Incididunt ut labore</li>
            </ul>
            <ul>
              <li>✔ Aliquip ex ea commodo</li>
              <li>✔ Lorem ipsum dolor</li>
              <li>✔ Exercitation ullamco</li>
              <li>✔ Lorem ipsum dolor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>



export default About;


    <section id="services" className="services-section">
  {/* Section Title */}
  <div className="text-center section-header">
    <h2 className="section-title">Our Services</h2>
    <p className="section-subtitle">
      We provide innovative solutions tailored to your needs.
    </p>
  </div>

  {/* Services Row */}
  <div className="row services-container">
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
        <img src={Logo} alt="Service-image 1" className="Service-image"></img>
        <h3>Web Development</h3>
        <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
      <img src={Logo} alt="Service-image 1" className="Service-image"></img>
      <h3>App Development</h3>
      <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
      <img src={Logo} alt="Service-image 1" className="Service-image"></img>
      <h3>Digital Marketing</h3>
      <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
      <img src={Logo} alt="Service-image 1" className="Service-image"></img>
      <h3>Cloud Solutions</h3>
      <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
      <img src={Logo} alt="Service-image 1" className="Service-image"></img>
      <h3>Cybersecurity</h3>
      <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="service-card">
      <img src={Logo} alt="Service-image 1" className="Service-image"></img>
      <h3>24/7 Support</h3>
      <p>We build high-performance websites tailored to your needs.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Landingpage;
