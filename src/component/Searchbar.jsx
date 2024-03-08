import React, { useState } from "react";
import {
  BsBuilding,
  BsCalendar4Event,
  BsDashCircle,
  BsGeoAlt,
  BsPlusCircle,
  BsSearch,
  BsXLg,
} from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Searchbar = () => {
  const [isWhereBoxVisible, setIsWhereBoxVisible] = useState(false);
  const [isCheckOutBoxVisible, setIsCheckOutBoxVisible] = useState(false);
  const [isWhoBoxVisible, setIsWhoBoxVisible] = useState(false);
  const [isCheckInBoxVisible, setIsCheckInBoxVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("dates");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const calendarCustomizations = {
    showDoubleView: true,
    className: "custom-calendar",
    calendarType: "US",
  };
  return (
    <div className="search-text-box">
      <div className="box">
        <div className="search-grid">
          <div className="search-grid-card">
            <h6
              onClick={() => {
                setIsWhereBoxVisible(true);
                setIsCheckInBoxVisible(false);
                setIsCheckOutBoxVisible(false);
                setIsWhoBoxVisible(false);
              }}
              className={isWhereBoxVisible ? "activeh6" : ""}
            >
              Dove vuoi andare? <span>Milano</span>
            </h6>
            {isWhereBoxVisible && (
              <div className="where-hidden-box">
                <div className="whb-top">
                  <h5>Popular Destinations</h5>
                </div>
                <div className="whb-bottom">
                  <div className="whb-bot-text">
                    <BsGeoAlt />
                    <h4>
                      Barano d’Ischia <span>Campania · Italia</span>
                    </h4>
                  </div>
                  <div className="whb-bot-text">
                    <BsBuilding className="whb-except-svg" />
                    <h4>
                      Hotel San Giorgio Terme{" "}
                      <span>Barano d’Ischia · Italia</span>
                    </h4>
                  </div>
                  <div className="whb-bot-text">
                    <BsGeoAlt />
                    <h4>
                      Campania Mare <span>Campania · Italia</span>
                    </h4>
                  </div>
                  <div className="whb-bot-text">
                    <BsGeoAlt />
                    <h4>
                      Campania <span>Italia</span>
                    </h4>
                  </div>
                  <div className="whb-bot-text">
                    <BsCalendar4Event className="whb-except-svg" />
                    <h4>
                      Capodanno <span>Pacchetti Evento</span>
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search-grid-card">
            <h6
              onClick={() => {
                setIsCheckInBoxVisible(true);
                setIsCheckOutBoxVisible(false);
                setIsWhereBoxVisible(false);
                setIsWhoBoxVisible(false);
              }}
              className={isCheckInBoxVisible ? "activeh6" : ""}
            >
              Check In <span>26/04/2024</span>
            </h6>
            {isCheckInBoxVisible && (
              <div className="check-in-calendar">
                <div className="cic-top">
                  <h6>
                    Select your check-in date{" "}
                    <span>See prices and availability for your dates</span>
                  </h6>
                  <span
                    onClick={() => {
                      setIsCheckInBoxVisible(false);
                    }}
                  >
                    <BsXLg />
                  </span>
                </div>
                <div className="cic-tabs">
                  <div className="tabs">
                    <div
                      className={`tab ${activeTab === "dates" ? "active" : ""}`}
                      onClick={() => handleTabClick("dates")}
                    >
                      Dates
                    </div>
                    <div
                      className={`tab ${
                        activeTab === "flexible" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("flexible")}
                    >
                      Flexible
                    </div>
                  </div>
                  <div className="tab-content">
                    {activeTab === "dates" && (
                      <div className="tc-main-box">
                        <Calendar {...calendarCustomizations} />
                        <div className="tc-dates-opt">
                          <button>Exact dates</button>
                          <button>+/- 1 day</button>
                          <button>+/- 2 day</button>
                          <button>+/- 3 day</button>
                          <button>+/- 7 day</button>
                        </div>
                      </div>
                    )}

                    {activeTab === "flexible" && (
                      <div className="tc-main-box">
                        <h3>Choose your stay</h3>
                        <div className="tc-choose-days">
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="weekend" />
                            <label htmlFor="weekend">
                              <BsCalendar4Event /> Weekend
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="week" />
                            <label htmlFor="week">
                              <BsCalendar4Event /> Week
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="month" />
                            <label htmlFor="month">
                              <BsCalendar4Event /> Month
                            </label>
                          </div>
                        </div>
                        <h3>Go anytime</h3>
                        <div className="tc-choose-month">
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="feb" />
                            <label htmlFor="feb">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              February
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="march" />
                            <label htmlFor="march">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              March
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="april" />
                            <label htmlFor="april">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              April
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="may" />
                            <label htmlFor="may">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              May
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="june" />
                            <label htmlFor="june">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              June
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="july" />
                            <label htmlFor="july">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              July
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search-grid-card">
            <h6
              onClick={() => {
                setIsCheckOutBoxVisible(true);
                setIsWhereBoxVisible(false);
                setIsCheckInBoxVisible(false);
                setIsWhoBoxVisible(false);
              }}
              className={isCheckOutBoxVisible ? "activeh6" : ""}
            >
              Check Out <span>26/04/2024</span>
            </h6>
            {isCheckOutBoxVisible && (
              <div className="check-in-calendar">
                <div className="cic-top">
                  <h6>
                    Select your check-out date{" "}
                    <span>See prices and availability for your dates</span>
                  </h6>
                  <span
                    onClick={() => {
                      setIsCheckOutBoxVisible(false);
                    }}
                  >
                    <BsXLg />
                  </span>
                </div>
                <div className="cic-tabs">
                  <div className="tabs">
                    <div
                      className={`tab ${activeTab === "dates" ? "active" : ""}`}
                      onClick={() => handleTabClick("dates")}
                    >
                      Dates
                    </div>
                    <div
                      className={`tab ${
                        activeTab === "flexible" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("flexible")}
                    >
                      Flexible
                    </div>
                  </div>
                  <div className="tab-content">
                    {activeTab === "dates" && (
                      <div className="tc-main-box">
                        <Calendar {...calendarCustomizations} />
                        <div className="tc-dates-opt">
                          <button>Exact dates</button>
                          <button>+/- 1 day</button>
                          <button>+/- 2 day</button>
                          <button>+/- 3 day</button>
                          <button>+/- 7 day</button>
                        </div>
                      </div>
                    )}

                    {activeTab === "flexible" && (
                      <div className="tc-main-box">
                        <h3>Choose your stay</h3>
                        <div className="tc-choose-days">
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="weekend" />
                            <label htmlFor="weekend">
                              <BsCalendar4Event /> Weekend
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="week" />
                            <label htmlFor="week">
                              <BsCalendar4Event /> Week
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="abc" id="month" />
                            <label htmlFor="month">
                              <BsCalendar4Event /> Month
                            </label>
                          </div>
                        </div>
                        <h3>Go anytime</h3>
                        <div className="tc-choose-month">
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="feb" />
                            <label htmlFor="feb">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              February
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="march" />
                            <label htmlFor="march">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              March
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="april" />
                            <label htmlFor="april">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              April
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="may" />
                            <label htmlFor="may">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              May
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="june" />
                            <label htmlFor="june">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              June
                            </label>
                          </div>
                          <div className="tcd-selectm-card">
                            <input type="radio" name="abc" id="july" />
                            <label htmlFor="july">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                              >
                                <path
                                  d="M19 9H1M14 1V5M6 1V5M8.5 13L10 12V17M8.75 17H11.25M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                                  stroke="black"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>{" "}
                              July
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="serach-grid-box">
            <h6
              onClick={() => {
                setIsWhoBoxVisible(true);
                setIsCheckOutBoxVisible(false);
                setIsWhereBoxVisible(false);
                setIsCheckInBoxVisible(false);
              }}
              className={isWhoBoxVisible ? "activeh6" : ""}
            >
              {" "}
              Stanze <span>2 Stanze, 3 adulti</span>
            </h6>
            {isWhoBoxVisible && (
              <div className="who-hidden-box">
                <div className="add-reset-box">
                  <h6>Reset</h6>
                  <button>Add Room</button>
                </div>
                <div className="whb-room-box">
                  <div className="whb-top">
                    <h5>Room 1</h5>
                    <BsXLg />
                  </div>
                  <div className="whb-room-bottom">
                    <div className="whb-plus-minus">
                      <h5>Adults</h5>
                      <div>
                        <BsDashCircle />
                        <span>2</span>
                        <BsPlusCircle />
                      </div>
                    </div>
                    <div className="whb-plus-minus">
                      <h5>Children</h5>
                      <div>
                        <BsDashCircle className="whb-plus-excep" />
                        <span>1</span>
                        <BsPlusCircle />
                      </div>
                    </div>
                    <div className="whb-room-select">
                      <p>Age of children on date of travel:</p>
                      <select id="whb">
                        <option value="option1">0</option>
                        <option value="option2">1</option>
                        <option value="option3">2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="whb-room-box">
                  <div className="whb-top">
                    <h5>Room 2</h5>
                    <BsXLg />
                  </div>
                  <div className="whb-room-bottom">
                    <div className="whb-plus-minus">
                      <h5>Adults</h5>
                      <div>
                        <BsDashCircle />
                        <span>2</span>
                        <BsPlusCircle />
                      </div>
                    </div>
                    <div className="whb-plus-minus">
                      <h5>Children</h5>
                      <div>
                        <BsDashCircle className="whb-plus-excep" />
                        <span>1</span>
                        <BsPlusCircle />
                      </div>
                    </div>
                    <div className="whb-room-select">
                      <p>Age of children on date of travel:</p>
                      <select id="whb">
                        <option value="option1">0</option>
                        <option value="option2">1</option>
                        <option value="option3">2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search-box">
            <BsSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
