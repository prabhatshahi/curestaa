import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Banner2 from "./components/Banner2";
import Docpanel from "./components/Docpanel";
import PackageService from "./components/PackageService";
import Post from "./components/Post";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="banner2">
        <Banner2 />
      </section>
      <section id="docpanel">
        <Docpanel />
      </section>
      <section id="package">
        <PackageService />
      </section>
      <section id="post">
        <Post />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}

export default App;
