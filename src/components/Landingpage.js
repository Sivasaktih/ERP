import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./landingpage.css"; // Import CSS file for styling
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
            <a className="navbar-brand" href="#home">
              React Landing Page
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav-links">
              <li><a href="#features">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
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
          <div className="about-image">
            <img src={Logo} alt="About Us" />
          </div>

          <div className="about-text">
            <h1 className="about-title">
              ABOUT US <span className="underline"></span>
            </h1>
            <p className="about-description">
              We provide top-notch digital solutions tailored to your needs. 
              Our team ensures that your business achieves its full potential 
              through innovative technology.
            </p>

            <h3 className="about-subtitle">Why Choose Us?</h3>

            <div className="about-list">
              <ul>
                <li>✔ Reliable & Scalable Solutions</li>
                <li>✔ Customer-Centric Approach</li>
                <li>✔ Cutting-edge Technology</li>
                <li>✔ 24/7 Support</li>
              </ul>
              <ul>
                <li>✔ Competitive Pricing</li>
                <li>✔ Dedicated Team</li>
                <li>✔ Proven Track Record</li>
                <li>✔ Secure & Efficient</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="text-center section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide innovative solutions tailored to your needs.
          </p>
        </div>

        <div className="row services-container">
          {[
            { title: "Web Development", desc: "Building high-performance websites.", img: Logo },
            { title: "App Development", desc: "Creating robust mobile applications.", img: Logo },
            { title: "Digital Marketing", desc: "Enhancing your online presence.", img: Logo },
            { title: "Cloud Solutions", desc: "Providing scalable cloud-based solutions.", img: Logo },
            { title: "Cybersecurity", desc: "Ensuring data safety and security.", img: Logo },
            { title: "24/7 Support", desc: "Always available for your needs.", img: Logo }
          ].map((service, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="service-card">
                <img src={service.img} alt={service.title} className="Service-image" />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="team" className="team-section">
        <h1>Meet the Team</h1>
        <p>Passionate professionals dedicated to your success.</p>
        <div className="team-container">
          {[
            { name: "John Doe", role: "Director", img: Logo },
            { name: "Mike Doe", role: "Senior Designer", img: Logo },
            { name: "Jane Doe", role: "Senior Developer", img: Logo },
            { name: "Karen Doe", role: "Project Manager", img: Logo }
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="contact-container">
      <div className="contact-form">
        <h2>GET IN TOUCH</h2>
        <p>Fill out the form below to send us an email.</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Message" required></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Info</h2>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong> Address:</strong> 4321 California St, San Francisco, CA 12345</p>
        <p><FontAwesomeIcon icon={faPhone} /> <strong> Phone:</strong> +1 123 456 1234</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <strong> Email:</strong> info@company.com</p>
      </div>
    </div>
              
 </div>
  );
};
export default Landingpage;