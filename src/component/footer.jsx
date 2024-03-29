import React from "react";
import FLogo from "../assets/img/footer-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <div className="box-lg">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-grid-content fgc-box1">
              <img src={FLogo} alt="" />
              <p>
                Founded in 1998, CozyStay Lodge is a luxury boutique hotel in
                the heart of Napa Valley, immersing you in an idyllic setting
                against the pure sky. Stay, sip, and savor the best of Napa wine
                country at CozyStay.
              </p>
              <div className="social-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaPinterest />
                <FaYoutube />
                <FaInstagram />
              </div>
            </div>
            <div className="footer-grid-content fgc-box2">
              <div className="fgc-middle-top">
                <h5 className="font">Reach Out</h5>
                <Link to="#">Email: info@cozystay.com</Link>
                <Link to="#">Telephone: +41 22 345 66 89</Link>
                <Link to="#">Address: 322 Main Street, Napa, CA 94559</Link>
              </div>
              <div className="fgc-middle-bottom">
                <div className="fgcm-content">
                  <h6 className="font">ABRUZZO</h6>
                  <h6 className="font">ALBANIA</h6>
                  <h6 className="font">BASILICATA</h6>
                  <h6 className="font">CALABRIA</h6>
                  <h6 className="font">CAMPANIA</h6>
                  <h6 className="font">CORSICA</h6>
                  <h6 className="font">CROAZIA</h6>
                  <h6 className="font">CROCIERE</h6>
                </div>
                <div className="fgcm-content">
                  <h6 className="font">EMILIAROMAGNA</h6>
                  <h6 className="font">GRECIA</h6>
                  <h6 className="font">LAMPEDUSA</h6>
                  <h6 className="font">LOMBARDIA</h6>
                  <h6 className="font">MARCHE</h6>
                  <h6 className="font">MARE ESTERO</h6>
                  <h6 className="font">PUGLIA</h6>
                  <h6 className="font">SARDEGNA</h6>
                </div>
                <div className="fgcm-content">
                  <h6 className="font">SICILIA</h6>
                  <h6 className="font">SLOVENIA</h6>
                  <h6 className="font">LAMPEDUSA</h6>
                  <h6 className="font">TOSCANA</h6>
                  <h6 className="font">TRENTINO</h6>
                  <h6 className="font">VALLE D'AOSTA</h6>
                  <h6 className="font">VENETO</h6>
                </div>
              </div>
            </div>
            <div className="footer-grid-content fgc-box3">
              <div className="fgc-middle-top">
                <h5 className="font">Navigate</h5>
                <Link to="#">Accommodations</Link>
                <Link to="#">Our Story</Link>
                <Link to="#">Contact Us</Link>
                <Link to="#">Services</Link>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>All rights reserved, Hele LLC. 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
