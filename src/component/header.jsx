import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import FLogo from "../assets/img/footer-logo.png";
import { BsChevronDown, BsList, BsPersonCircle, BsXLg } from "react-icons/bs";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header>
      <div className="box-lg">
        <div className="header-cont">
          <div className="header-left">
            <img src={Logo} alt="" />
          </div>
          <div className="header-right">
            <Link to="#">
              DESTINAZIONI TURISTICHE <BsChevronDown />
            </Link>
            <Link to="#">
              PACCHETTI EVENTO <BsChevronDown />
            </Link>
            <Link to="#">proponi la tua struttura</Link>
            <button className="main-btn">Accedi</button>
          </div>
          <div className="hr-mob-box" onClick={toggleMobileMenu}>
            <BsPersonCircle className="mob-person-i" />
            <BsList />
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-top">
                <Link to="/">
                  <img src={FLogo} alt="" />
                </Link>
                <BsXLg onClick={closeMobileMenu} />
              </div>
              <div className="mobile-menu-bottom">
                <Link to="#">
                  DESTINAZIONI TURISTICHE <BsChevronDown />
                </Link>
                <Link to="#">
                  PACCHETTI EVENTO <BsChevronDown />
                </Link>
                <Link to="#">proponi la tua struttura</Link>
                <button className="main-btn-mob">Accedi</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
