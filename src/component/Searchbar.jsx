import React, { useState, useEffect, useRef } from "react";
import {
  BsBuilding,
  BsCalendar4Event,
  BsDashCircle,
  BsGeoAlt,
  BsPlusCircle,
  BsSearch,
  BsX,
  BsXLg,
} from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/searchbar.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Searchbar = () => {
  const [isWhereBoxVisible, setIsWhereBoxVisible] = useState(false);
  const [isCheckOutBoxVisible, setIsCheckOutBoxVisible] = useState(false);
  const [isWhoBoxVisible, setIsWhoBoxVisible] = useState(false);
  const [isCheckInBoxVisible, setIsCheckInBoxVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("dates");
  const [inputValue, setInputValue] = useState("");
  const divRef = useRef();
  const whereInputRef = useRef(null);

  const handleClearInput = () => {
    setInputValue("");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsWhereBoxVisible(false);
      setIsCheckOutBoxVisible(false);
      setIsCheckInBoxVisible(false);
      setIsWhoBoxVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  let handleWhere = () => {
    setIsWhereBoxVisible(true);
    setIsCheckInBoxVisible(false);
    setIsCheckOutBoxVisible(false);
    setIsWhoBoxVisible(false);
    whereInputRef.current.focus();
  };
  let handleWho = () => {
    setIsWhoBoxVisible(true);
    setIsCheckOutBoxVisible(false);
    setIsWhereBoxVisible(false);
    setIsCheckInBoxVisible(false);
  };

  const [rooms, setRooms] = useState([{ adults: 2, children: [] }]);

  const addRoom = () => {
    if (rooms.length < 3) {
      // Limit to 3 rooms
      setRooms([...rooms, { adults: 2, children: [] }]);
    }
  };

  const resetRooms = () => {
    setRooms([{ adults: 2, children: [] }]);
  };

  const updateAdults = (index, delta) => {
    const newRooms = [...rooms];
    const newAdultCount = newRooms[index].adults + delta;
    if (newAdultCount >= 1 && newAdultCount <= 9) {
      // Enforce adult limit per room
      newRooms[index].adults = newAdultCount;
      setRooms(newRooms);
    }
  };

  const updateChildren = (index, delta) => {
    const newRooms = [...rooms];
    const currentChildrenCount = newRooms[index].children.length;
    if (delta === 1 && currentChildrenCount < 3) {
      // Allow adding if under child limit
      newRooms[index].children.push({ age: 0 });
    } else if (delta === -1 && currentChildrenCount > 0) {
      // Allow removing if above 0
      newRooms[index].children.pop();
    }
    setRooms(newRooms);
  };

  const updateChildAge = (roomIndex, childIndex, age) => {
    const newRooms = [...rooms];
    newRooms[roomIndex].children[childIndex].age = age;
    setRooms(newRooms);
  };

  const removeRoom = (index) => {
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="search-text-box">
      <div className="box">
        <div className="search-grid">
          <div className="search-grid-card">
            <h6
              onClick={handleWhere}
              className={isWhereBoxVisible ? "active-tab" : ""}
            >
              Dove vuoi andare?
              <span
                className={`search-input-container ${
                  inputValue ? "has-value" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search Hotel Or Place"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  ref={whereInputRef}
                />
                {inputValue && (
                  <BsXLg className="close-icon" onClick={handleClearInput} />
                )}
              </span>
            </h6>
            {isWhereBoxVisible && (
              <div className="where-hidden-box" ref={divRef}>
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
                setIsWhereBoxVisible(false);
                setIsCheckOutBoxVisible(false);
                setIsWhoBoxVisible(false);
              }}
              className={isCheckInBoxVisible ? "active-tab" : ""}
            >
              Check In{" "}
              <span className="search-input-container">
                <input type="text" placeholder="Select date" />
              </span>
            </h6>

            {isCheckInBoxVisible && (
              <div className="check-in-calendar" ref={divRef}>
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
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          inline
                          monthsShown={2}
                        />
                        <div className="tc-dates-opt">
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="exact" id="exact" />
                            <label htmlFor="exact">Exact dates</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="1day" id="1day" />
                            <label htmlFor="1day">+/- 1 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="2day" id="2day" />
                            <label htmlFor="2day">+/- 2 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="3day" id="3day" />
                            <label htmlFor="3day">+/- 3 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="7day" id="7day" />
                            <label htmlFor="7day">+/- 7 day</label>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "flexible" && (
                      <div className="tc-main-box">
                        <h3>Choose your stay</h3>
                        <div className="tc-choose-days">
                          <div className="tcd-select-card">
                            <input type="radio" name="weekend" id="weekend" />
                            <label htmlFor="weekend">
                              <BsCalendar4Event /> Weekend
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="week" id="week" />
                            <label htmlFor="week">
                              <BsCalendar4Event /> Week
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="month" id="month" />
                            <label htmlFor="month">
                              <BsCalendar4Event /> Month
                            </label>
                          </div>
                        </div>
                        <h3>Go anytime</h3>
                        <div className="tc-choose-month">
                          <Swiper
                            className="mySwiper"
                            slidesPerView={6}
                            spaceBetween={10}
                          >
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="jan" id="jan" />
                                <label htmlFor="jan">
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
                                  January
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="feb" id="feb" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="march" id="march" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="april" id="april" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="may" id="may" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="june" id="june" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="july" id="july" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="august" id="august" />
                                <label htmlFor="august">
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
                                  August
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="sep" id="sep" />
                                <label htmlFor="sep">
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
                                  September
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="oct" id="oct" />
                                <label htmlFor="oct">
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
                                  October
                                </label>
                              </div>
                            </SwiperSlide>
                          </Swiper>
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
              className={isCheckOutBoxVisible ? "active-tab" : ""}
            >
              Check Out{" "}
              <span className="search-input-container">
                <input type="text" placeholder="Select date" />
              </span>
            </h6>

            {isCheckOutBoxVisible && (
              <div className="check-in-calendar" ref={divRef}>
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
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          inline
                          monthsShown={2}
                        />
                        <div className="tc-dates-opt">
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="exact" id="exact" />
                            <label htmlFor="exact">Exact dates</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="1day" id="1day" />
                            <label htmlFor="1day">+/- 1 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="2day" id="2day" />
                            <label htmlFor="2day">+/- 2 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="3day" id="3day" />
                            <label htmlFor="3day">+/- 3 day</label>
                          </div>
                          <div className="tc-dates-opt-card">
                            <input type="radio" name="7day" id="7day" />
                            <label htmlFor="7day">+/- 7 day</label>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "flexible" && (
                      <div className="tc-main-box">
                        <h3>Choose your stay</h3>
                        <div className="tc-choose-days">
                          <div className="tcd-select-card">
                            <input type="radio" name="weekend" id="weekend" />
                            <label htmlFor="weekend">
                              <BsCalendar4Event /> Weekend
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="week" id="week" />
                            <label htmlFor="week">
                              <BsCalendar4Event /> Week
                            </label>
                          </div>
                          <div className="tcd-select-card">
                            <input type="radio" name="month" id="month" />
                            <label htmlFor="month">
                              <BsCalendar4Event /> Month
                            </label>
                          </div>
                        </div>
                        <h3>Go anytime</h3>
                        <div className="tc-choose-month">
                          <Swiper
                            className="mySwiper"
                            slidesPerView={6}
                            spaceBetween={10}
                          >
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="jan" id="jan" />
                                <label htmlFor="jan">
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
                                  January
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="feb" id="feb" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="march" id="march" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="april" id="april" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="may" id="may" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="june" id="june" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="july" id="july" />
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
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="august" id="august" />
                                <label htmlFor="august">
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
                                  August
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="sep" id="sep" />
                                <label htmlFor="sep">
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
                                  September
                                </label>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="tcd-selectm-card">
                                <input type="radio" name="oct" id="oct" />
                                <label htmlFor="oct">
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
                                  October
                                </label>
                              </div>
                            </SwiperSlide>
                          </Swiper>
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
              onClick={handleWho}
              className={isWhoBoxVisible ? "active-tab" : ""}
            >
              {" "}
              Stanze{" "}
              <span>
                {rooms.length} Stanze,{" "}
                {rooms.reduce((acc, room) => acc + room.adults, 0)} adulti
                {(() => {
                  const totalChildren = rooms.reduce(
                    (acc, room) => acc + room.children.length,
                    0
                  );
                  if (totalChildren >= 1 && totalChildren <= 3) {
                    return `, ${totalChildren} bambini`;
                  }
                  return "";
                })()}
              </span>
            </h6>
            {isWhoBoxVisible && (
              <div className="who-hidden-box" ref={divRef}>
                <div className="add-reset-box">
                  <h6 onClick={resetRooms}>Reset</h6>
                  <button onClick={addRoom}>Add Room</button>
                </div>

                {rooms.map((room, index) => (
                  <div className="whb-room-box" key={index}>
                    <div className="whb-top">
                      <h5>Room {index + 1}</h5>
                      {rooms.length > 1 && (
                        <BsXLg onClick={() => removeRoom(index)} />
                      )}
                    </div>
                    <div className="whb-room-bottom">
                      <div className="whb-plus-minus">
                        <h5>Adults</h5>
                        <div>
                          <BsDashCircle
                            onClick={() => updateAdults(index, -1)}
                          />
                          <span>{room.adults}</span>
                          <BsPlusCircle
                            onClick={() => updateAdults(index, 1)}
                          />
                        </div>
                      </div>
                      <div className="whb-plus-minus">
                        <h5>Children</h5>
                        <div>
                          <BsDashCircle
                            onClick={() => updateChildren(index, -1)}
                          />
                          <span>{room.children.length}</span>
                          <BsPlusCircle
                            onClick={() => updateChildren(index, 1)}
                          />
                        </div>
                      </div>

                      {room.children.length > 0 && (
                        <div className="whb-room-select">
                          <p>Age of children on date of travel:</p>
                          <div className="childrenage-grid">
                            {room.children.map((child, childIndex) => (
                              <select
                                key={childIndex}
                                value={child.age}
                                onChange={(e) =>
                                  updateChildAge(
                                    index,
                                    childIndex,
                                    e.target.value
                                  )
                                }
                              >
                                {Array.from({ length: 18 }, (_, i) => (
                                  <option key={i} value={i}>
                                    {i}
                                  </option>
                                ))}
                              </select>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
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
