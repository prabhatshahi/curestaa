import React from "react";
import banner2 from "../images/banner-2-img.png";
const Banner2 = () => {
  return (
    <div>
      {/* Banner two section */}
      <section id="banner-two" className="banner-two text-center">
        <div className="container grid">
          <div className="banner-two-left">
            <img src={banner2} alt="Banner Image" />
          </div>
          <div className="banner-two-right">
            <p className="lead text-white">
              When you are young and healthy, it never occurs to you that in a
              single second your whole life could change.
            </p>
            <div className="btn-group">
              <a className="btn btn-white">Learn More</a>
              <a className="btn btn-light-blue">Sign In</a>
            </div>
          </div>
        </div>
      </section>
      {/* End of banner two section */}
    </div>
  );
};

export default Banner2;
