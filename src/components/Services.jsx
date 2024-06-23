import React from "react";
import dots4 from "../images/4-dots.png";
import service1 from "../images/service-icon-1.png";
import service3 from "../images/service-icon-3.png";
import service4 from "../images/service-icon-4.png";
import service2 from "../images/service-icon-2.png";
const Services = () => {
  return (
    <div>
      {/* Services section */}
      <section id="services" className="services py">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="lead">The Best Doctor gives the least medicines</h2>
            <p className="text text-lg">
              A perfect way to show your hospital services
            </p>
            <div className="line-art flex">
              <div></div>
              <img src={dots4} alt="Decoration" />
              <div></div>
            </div>
          </div>
          <div className="services-inner text-center grid">
            <article className="service-item">
              <div className="icon">
                <img src={service1} alt="Cardio Monitoring" />
              </div>
              <h3>Cardio Monitoring</h3>
              <p className="text text-sm">
                We understand the critical importance of heart health, which is
                why we offer comprehensive cardio monitoring services. Our
                state-of-the-art cardio monitoring technology allows us to keep
                a close watch on your heart’s activity, ensuring early detection
                of any irregularities or potential issues.
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service2} alt="Medical Treatment" />
              </div>
              <h3>Medical Treatment</h3>
              <p className="text text-sm">
                We are dedicated to providing exceptional medical treatment
                tailored to each patient's unique needs. Our comprehensive
                approach to healthcare ensures that you receive the most
                advanced and effective treatments available.
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service3} alt="Emergency Help" />
              </div>
              <h3>Emergency Help</h3>
              <p className="text text-sm">
                Our emergency help services are designed to offer rapid,
                effective care in critical situations. Our highly trained
                emergency medical team is available 24/7, equipped with the
                latest technology and medical expertise to handle any emergency,
                from severe injuries and sudden illnesses to life-threatening
                conditions.
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service4} alt="First Aid" />
              </div>
              <h3>First Aid</h3>
              <p className="text text-sm">
                Our first aid services are designed to provide prompt and
                essential care, minimizing the severity of injuries and
                improving outcomes. Whether you're dealing with minor cuts,
                burns, sprains, or more serious incidents, our trained
                professionals are equipped with the knowledge and skills to
                deliver high-quality first aid.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* End of services section */}
    </div>
  );
};

export default Services;
