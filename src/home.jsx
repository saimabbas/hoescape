import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/img/logo.png";
import Hotel1 from "./assets/img/hotel1.png";
import HotelMini1 from "./assets/img/hotelmini1.png";
import {
  BsCalendar3,
  BsCheckCircleFill,
  BsChevronDown,
  BsChevronUp,
  BsCupHotFill,
  BsEnvelope,
  BsFillStarFill,
  BsFillTelephoneFill,
  BsGeoAlt,
  BsSearch,
  BsWifi,
} from "react-icons/bs";
import Hotelcard from "./component/Hotelcard";

const Page = () => {
  const [isAccor1Visible, setAccor1Visible] = useState(false);
  const [isAccor2Visible, setAccor2Visible] = useState(false);
  const [isAccor3Visible, setAccor3Visible] = useState(false);
  const [isAccor4Visible, setAccor4Visible] = useState(false);
  const [isAccor5Visible, setAccor5Visible] = useState(false);

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
  return (
    <div className="hoescape">
      <main className="main-page">
        {/* TOP BAR  */}
        <div className="top-bar">
          <a href="#">
            <BsEnvelope />
          </a>
          <a href="#">
            <BsFillTelephoneFill />
          </a>
        </div>
        {/* HEADER  */}
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
        {/* SEARCH BOX  */}
        <div className="search-text-box">
          <div className="box">
            <div className="search-text-content">
              <h6>
                Dove vuoi andare? <span>Milano</span>
              </h6>
              <h6>
                Check In <span>26/04/2024</span>
              </h6>
              <h6>
                Check Out <span>26/04/2024</span>
              </h6>
              <h6>
                Stanze <span>2 Stanze, 3 adulti</span>
              </h6>
              <div className="search-box">
                <BsSearch />
              </div>
            </div>
          </div>
        </div>
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
                <div className="rgl-accordian">
                  <div className="rgl-acco-head" onClick={toggleAccor1}>
                    <h6 className="font">Filtra per Stelle</h6>
                    {isAccor1Visible ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  {isAccor1Visible && (
                    <div className="rgl-accor-open">
                      <div className="rating-grid">
                        <div className="rating-card">
                          <input type="radio" name="abc" id="1" />
                          <label htmlFor="1">
                            {" "}
                            <BsFillStarFill /> 1
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="radio" name="abc" id="2" />
                          <label htmlFor="2">
                            {" "}
                            <BsFillStarFill /> 2
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="radio" name="abc" id="3" />
                          <label htmlFor="3">
                            {" "}
                            <BsFillStarFill />3
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="radio" name="abc" id="3" />
                          <label htmlFor="3">
                            {" "}
                            <BsFillStarFill />4
                          </label>
                        </div>
                        <div className="rating-card">
                          <input type="radio" name="abc" id="3" />
                          <label htmlFor="3">
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
                  <div className="rgl-acco-head" onClick={toggleAccor5}>
                    <h6 className="font">In Evidenza</h6>
                    <div className="rgl-acco-h-right">
                      <div className="acco-ser-input">
                        <BsSearch />
                        <input type="text" placeholder="cerca" />
                      </div>
                      {isAccor5Visible ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                  </div>
                  {isAccor5Visible && (
                    <div className="rgl-accor-open">
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
                    <span>
                      Consigliati per te <BsChevronDown />
                    </span>
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
      </main>
    </div>
  );
};

export default Page;
