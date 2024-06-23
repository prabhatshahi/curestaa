import React from "react";
import aboutimg from "../images/about-img.png";
const About = () => {
  return (
    <div>
      {/* about section */}
      <section id="about" className="about py">
        <div className="about-inner">
          <div className="container grid">
            <div className="about-left text-center">
              <div className="section-head">
                <h2>About Us</h2>
                <div className="border-line"></div>
              </div>
              <p className="text text-lg">
                Welcome to Curesta, where your health and wellness are our top
                priorities. Founded on the principles of compassion, integrity,
                and excellence, we are dedicated to providing you with the
                highest quality healthcare services. Our mission is to empower
                individuals to achieve their best health through personalized,
                comprehensive care.
              </p>
              <a href="#" className="btn btn-white">
                Learn More
              </a>
            </div>
            <div className="about-right flex">
              <div className="img">
                <img src={aboutimg} alt="About us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
