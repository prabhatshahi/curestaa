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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service2} alt="Medical Treatment" />
              </div>
              <h3>Medical Treatment</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service3} alt="Emergency Help" />
              </div>
              <h3>Emergency Help</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </article>

            <article className="service-item">
              <div className="icon">
                <img src={service4} alt="First Aid" />
              </div>
              <h3>First Aid</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
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
