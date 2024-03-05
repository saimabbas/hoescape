import React from "react";
import Logo from "../assets/img/logo.png";
import { BsChevronDown } from "react-icons/bs";

const header = () => {
  return (
    <header>
      <div className="box-lg">
        <div className="header-cont">
          <div className="header-left">
            <img src={Logo} alt="" />
          </div>
          <div className="header-right">
            <a href="#">
              DESTINAZIONI TURISTICHE <BsChevronDown />
            </a>
            <a href="#">
              PACCHETTI EVENTO <BsChevronDown />
            </a>
            <a href="#">proponi la tua struttura</a>
            <button className="main-btn">Accedi</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
