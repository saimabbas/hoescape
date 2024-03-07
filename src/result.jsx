import React, { useState } from "react";
import "./App.css";
import map from "./assets/img/map.png";
import FLogo from "./assets/img/footer-logo.png";
import {
  BsChevronDown,
  BsChevronUp,
  BsCupHotFill,
  BsEnvelope,
  BsFillStarFill,
  BsFillTelephoneFill,
  BsSearch,
  BsWifi,
} from "react-icons/bs";
import Hotelcard from "./component/Hotelcard";
import Header from "./component/header";
import Footer from "./component/footer";
import Searchbar from "./component/Searchbar";
import CTA from "./component/CTA";
import Topbar from "./component/Topbar";

const Page = () => {
  const [isAccor1Visible, setAccor1Visible] = useState(true);
  const [isAccor2Visible, setAccor2Visible] = useState(true);
  const [isAccor3Visible, setAccor3Visible] = useState(true);
  const [isAccor4Visible, setAccor4Visible] = useState(true);
  const [isAccor5Visible, setAccor5Visible] = useState(true);
  const [isAccor6Visible, setAccor6Visible] = useState(true);

  const toggleAccor1 = () => {
    setAccor1Visible(!isAccor1Visible);
  };
  const toggleAccor2 = () => {
    setAccor2Visible(!isAccor2Visible);
  };
  const toggleAccor3 = () => {
    setAccor3Visible(!isAccor3Visible);
  };
  const toggleAccor4 = () => {
    setAccor4Visible(!isAccor4Visible);
  };
  const toggleAccor5 = () => {
    setAccor5Visible(!isAccor5Visible);
  };
  const toggleAccor6 = () => {
    setAccor6Visible(!isAccor6Visible);
  };
  return (
    <div className="hoescape">
      <main className="main-page">
        {/* TOP BAR  */}
        <Topbar />
        {/* HEADER  */}
        <Header />
        {/* SEARCH BOX  */}
        <Searchbar />
        {/* LOGIN BUTTON */}
        <div className="login-opt-box">
          <div className="box-lg">
            <div className="login-opt-cont">
              <p>Registrati Adesso per Accedere a sconti esclusivi</p>
              <button className="sign-btn">Accedi / Iscriviti</button>
            </div>
          </div>
        </div>
        {/* RESULT GRID  */}
        <section className="result-grid-section">
          <div className="box-lg">
            <div className="res-grid-cont">
              <div className="res-grid-left">
                <div className="rgl-map-box">
                  <img src={map} alt="" />
                  <button className="map-btn">Vedi Mappa</button>
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor1}>
                    <h6 className="font">Filtra per Stelle</h6>
                    {isAccor1Visible ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {isAccor1Visible && (
                    <div className="rgl-accor-open">
                      <div className="rating-grid">
                        <div className="rating-card">
                          <input type="checkbox" name="abc" id="1" />
                          <label htmlFor="1">
                            {" "}
                            <BsFillStarFill /> 1
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="checkbox" name="abc" id="2" />
                          <label htmlFor="2">
                            {" "}
                            <BsFillStarFill /> 2
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="checkbox" name="abc" id="3" />
                          <label htmlFor="3">
                            {" "}
                            <BsFillStarFill />3
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="checkbox" name="abc" id="4" />
                          <label htmlFor="4">
                            {" "}
                            <BsFillStarFill />4
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="checkbox" name="abc" id="5" />
                          <label htmlFor="5">
                            {" "}
                            <BsFillStarFill />5
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor2}>
                    <h6 className="font">Filtra Per Nome dell’Hotel</h6>
                    {isAccor2Visible ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {isAccor2Visible && (
                    <div className="rgl-accor-open">
                      <div className="acco-search">
                        <div className="acco-ser-input">
                          <BsSearch />
                          <input type="text" placeholder="Name Hotel" />
                        </div>
                        <div className="accor-serach-btn">
                          <BsSearch />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor3}>
                    <h6 className="font">Servizi</h6>
                    <div className="rgl-acco-h-right">
                      <div className="acco-ser-input">
                        <BsSearch />
                        <input type="text" placeholder="cerca" />
                      </div>
                      {isAccor3Visible ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                  </div>
                  {isAccor3Visible && (
                    <div className="rgl-accor-open">
                      <div className="check-opt-num-box">
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>
                              <BsWifi />
                              Internet Gratuito
                            </p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>
                              <BsCupHotFill />
                              Bar
                            </p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>
                              <BsWifi />
                              Parcheggio Gratuito
                            </p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>
                              <BsWifi />
                              Animali Ammessi
                            </p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>
                              <BsWifi />
                              Piscina Interna
                            </p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <h4 className="font">
                            Mostra altri 13 <BsChevronDown />
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor4}>
                    <h6 className="font">Località</h6>
                    <div className="rgl-acco-h-right">
                      <div className="acco-ser-input">
                        <BsSearch />
                        <input type="text" placeholder="cerca" />
                      </div>
                      {isAccor4Visible ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                  </div>
                  {isAccor4Visible && (
                    <div className="rgl-accor-open">
                      <div className="check-opt-num-box">
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>Centrale</p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>Navigli</p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>CityLife</p>
                          </div>
                          <span>(393)</span>
                        </div>
                        <div className="check-opt-num">
                          <h4 className="font">
                            Mostra altri 14 <BsChevronDown />
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor6}>
                    <h6 className="font">Trattamento</h6>
                    {isAccor6Visible ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {isAccor6Visible && (
                    <div className="rgl-accor-open">
                      <div className="check-opt-num-box">
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>Camera e Colazione</p>
                          </div>
                          <span>(58)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>Mezza Pensione Bevande Escluse</p>
                          </div>
                          <span>(42)</span>
                        </div>
                        <div className="check-opt-num">
                          <div>
                            <input type="checkbox" name="" id="" />
                            <p>Pensione Completa Bevande Escluse</p>
                          </div>
                          <span>(3)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor5}>
                    <h6 className="font">In Evidenza</h6>
                    {isAccor5Visible ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {isAccor5Visible && (
                    <div className="rgl-accor-open rglah-box">
                      <div className="rating-flex">
                        <div className="rating-f-card">
                          <input type="radio" name="abc" id="7" />
                          <label htmlFor="7">
                            Terme Interne
                            <BsFillStarFill />
                          </label>
                        </div>
                        <div className="rating-f-card">
                          <input type="radio" name="abc" id="8" />
                          <label htmlFor="8">
                            Sauna
                            <BsFillStarFill />
                          </label>
                        </div>
                        <div className="rating-f-card">
                          <input type="radio" name="abc" id="9" />
                          <label htmlFor="9">
                            Spa
                            <BsFillStarFill />
                          </label>
                        </div>
                        <div className="rating-f-card">
                          <input type="radio" name="abc" id="10" />
                          <label htmlFor="10">
                            Navetta
                            <BsFillStarFill />
                          </label>
                        </div>
                        <div className="rating-f-card">
                          <input type="radio" name="abc" id="11" />
                          <label htmlFor="11">
                            Palestra
                            <BsFillStarFill />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="res-grid-right">
                <div className="rsr-opt">
                  <h4>
                    Ordina per:{" "}
                    <select id="ss1">
                      <option value="option1">Consigliati per te</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </h4>
                </div>
                <div className="rsr-flex-box">
                  <Hotelcard />
                  <Hotelcard />
                  <div className="rsr-mid-heading">
                    <p>Assistenza HoEscape telefonica 7 giorni su 7</p>
                  </div>
                  <Hotelcard />
                  <div className="rsr-mid-heading">
                    <p>Carica Altri 25 Hotel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA SECTION  */}
        <CTA />
        {/* FOOTER  */}
        <Footer />
      </main>
    </div>
  );
};

export default Page;
