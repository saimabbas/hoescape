import React from "react";
import CTAImg from "../assets/img/cta.png";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-gradient"></div>
      <img src={CTAImg} alt="" />
      <div className="box-lg">
        <div className="cta-content">
          <h4 className="font">Do you want to give a gift to a friend?</h4>
          <button className="main-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
