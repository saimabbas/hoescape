import React from "react";
import { BsEnvelope, BsFillTelephoneFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="top-bar">
      <a href="#">
        <BsEnvelope />
      </a>
      <a href="#">
        <BsFillTelephoneFill />
      </a>
    </div>
  );
};

export default Topbar;
