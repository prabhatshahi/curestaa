import React from "react";
import doc1 from "../images/doc-1.png";
import doc2 from "../images/doc-2.png";
import doc3 from "../images/doc-3.png";
const Docpanel = () => {
  return (
    <div>
      {/* Doctors section */}
      <section id="doc-panel" className="doc-panel py">
        <div className="container">
          <div className="section-head">
            <h2>Our Doctor Panel</h2>
          </div>

          <div className="doc-panel-inner grid">
            <div className="doc-panel-item">
              <div className="img flex">
                <img src={doc1} alt="doctor image" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">Samuel Goe</p>
                  <p className="text-lg">Medicine</p>
                </div>
              </div>
            </div>

            <div className="doc-panel-item">
              <div className="img flex">
                <img src={doc2} alt="doctor image" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">Elizabeth Ira</p>
                  <p className="text-lg">Cardiology</p>
                </div>
              </div>
            </div>

            <div className="doc-panel-item">
              <div className="img flex">
                <img src={doc3} alt="doctor image" />
                <div className="info text-center bg-blue text-white flex">
                  <p className="lead">Tanya Collins</p>
                  <p className="text-lg">Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of doctors section */}
    </div>
  );
};

export default Docpanel;
