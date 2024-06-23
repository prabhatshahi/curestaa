import React from "react";

const PackageService = () => {
  return (
    <div>
      {/* Package services section */}
      <section id="package-service" className="package-service py text-center">
        <div className="container">
          <div className="package-service-head text-white">
            <h2>Package Service</h2>
            <p className="text text-lg">Best service package for you</p>
          </div>
          <div className="package-service-inner grid">
            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-phone fa-2x"></i>
              </div>
              <h3>Regular Case</h3>
              <p className="text text-sm">
                Our regular case services are designed to provide ongoing
                support for your general health needs, ensuring that you stay on
                top of your well-being.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>

            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-calendar-alt fa-2x"></i>
              </div>
              <h3>Serious Case</h3>
              <p className="text text-sm">
                . Our dedicated team of specialists and healthcare professionals
                is committed to providing comprehensive care for patients facing
                serious health conditions.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>

            <div className="package-service-item bg-white">
              <div className="icon flex">
                <i className="fas fa-comments fa-2x"></i>
              </div>
              <h3>Emergency Case</h3>
              <p className="text text-sm">
                Our emergency department is equipped with state-of-the-art
                technology and facilities, enabling us to perform advanced
                diagnostics and treatments quickly and efficiently.
              </p>
              <a href="#" className="btn btn-blue">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End of package services section */}
    </div>
  );
};

export default PackageService;
