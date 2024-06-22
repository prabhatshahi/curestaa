import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import hammenu from "../images/ham-menu-icon.png";
import closeIcon from "../images/close-icon.png";
import searchIcon from "../images/search-icon.png";
import header from "../images/header.png";

const Navbar = () => {
  const [searchIconSrc, setSearchIconSrc] = useState(searchIcon);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  const changeSearchIcon = () => {
    if (window.innerWidth >= 1200) {
      setSearchIconSrc(searchIcon);
    } else {
      setSearchIconSrc("../images/search-icon-dark.png");
    }
  };

  useEffect(() => {
    changeSearchIcon();
    window.addEventListener("resize", changeSearchIcon);

    return () => {
      window.removeEventListener("resize", changeSearchIcon);
    };
  }, []);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="header bg-blue">
        <nav className="navbar bg-blue">
          <div className="container flex">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="site logo" />
            </a>
            <button
              type="button"
              className="navbar-show-btn"
              onClick={toggleNavbar}
            >
              <img src={hammenu} alt="Menu" />
            </button>

            <div
              className={`navbar-collapse bg-white ${
                navbarVisible ? "navbar-show" : ""
              }`}
            >
              <button
                type="button"
                className="navbar-hide-btn"
                onClick={toggleNavbar}
              >
                <img src={closeIcon} alt="Close Menu" />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("docpanel")}
                  >
                    Doctors
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("post")}
                  >
                    Blog
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </span>
                </li>
              </ul>
              <div className="search-bar">
                <form>
                  <div className="search-bar-box flex">
                    <span className="search-icon flex">
                      <img src={searchIconSrc} alt="Search Icon" />
                    </span>
                    <input
                      type="search"
                      className="search-control"
                      placeholder="Search here"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>

        <div className="header-inner text-white text-center" id="home">
          <div className="container grid">
            <div className="header-inner-left">
              <h1>
                your most trusted
                <br />
                <span>health partner</span>
              </h1>
              <p className="lead">the best match services for you</p>
              <p className="text text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                nulla odit esse necessitatibus corporis voluptatem?
              </p>
              <div className="btn-group">
                <span
                  className="btn btn-white"
                  onClick={() => scrollToSection("contact")}
                >
                  Book Appointment
                </span>
                <a href="/" className="btn btn-light-blue">
                  Sign In
                </a>
              </div>
            </div>
            <div className="header-inner-right">
              <img src={header} alt="Header" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
