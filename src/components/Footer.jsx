import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="footer-inner text-white py grid">
            <div className="footer-item">
              <h3 className="footer-head">About Us</h3>
              <div className="icon">
                <img src={logo} alt="Logo" />
              </div>
              <p className="text text-md">
                The best hospital in Ranchi to get medical treatment
              </p>
              <address>
                The Curesta Hospital,
                <br />
                Deepatoli, Jai Prakash Nagar, <br />
                Co. Dublin, A94 E9D3 <br />
                Ranchi, Jharkhand
              </address>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">Tags</h3>
              <ul className="tags-list flex">
                <li>Medical care</li>
                <li>Emergency</li>
                <li>Therapy</li>
                <li>Surgery</li>
                <li>Medication</li>
                <li>Nurse</li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Our Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Appointment Schedule
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">Make an Appointment</h3>
              <p className="text text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, omnis.
              </p>
              <ul className="appointment-info">
                <li>8:00 AM - 11:00 AM</li>
                <li>2:00 PM - 05:00 PM</li>
                <li>8:00 PM - 11:00 PM</li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>curesta@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+003 478 2834(00)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-links">
            <li style={{ color: "white" }}>
              © Curesta Hospitals 2023 | All Rights Reserved
            </li>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </div>
  );
};

export default Footer;
