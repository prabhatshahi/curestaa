import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fad73126-ac96-41aa-8971-ee75e4628484");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (response.success) {
      console.log("Success", response);
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <div>
      {/* contact section */}
      <section id="contact" className="contact py">
        <div className="container grid">
          <div className="contact-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58594.26629807535!2d85.29100044863283!3d23.383092600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3231ac90809%3A0x6c1e87d383173a68!2sThe%20Curesta%20Hospital%20-%20best%20hospital%20in%20ranchi!5e0!3m2!1sen!2sin!4v1719067991377!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="contact-right text-white text-center bg-blue">
            <div className="contact-head">
              <h3 className="lead">Contact Us</h3>
              <p className="text text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-element">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  aria-label="Your name"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Your email"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile No"
                  aria-label="Your mobile number"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  placeholder="Select Date"
                  aria-label="Select date"
                  required
                />
              </div>

              <div className="form-element">
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="form-control"
                  aria-label="Your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-white btn-submit">
                Book Appointment
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </section>
      {/* end of contact section */}
    </div>
  );
};

export default ContactUs;
