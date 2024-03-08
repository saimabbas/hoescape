import React, { useState, useEffect, useRef } from "react";
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
  const [isDropdownh6Visible, setDropdownh6Visible] = useState(false);
  const [isDropdownh6Visible2, setDropdownh6Visible2] = useState(false);
  const [isDropdownh6Visible3, setDropdownh6Visible3] = useState(false);
  const [isDropdownh6Visible4, setDropdownh6Visible4] = useState(false);
  const [isCheckInBoxVisible, setIsCheckInBoxVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("dates");
  const dropdownRef = useRef(null);

  const toggleh6Dropdown = () => {
    setDropdownh6Visible(!isDropdownh6Visible);
  };
  const toggleh6Dropdown2 = () => {
    setDropdownh6Visible2(!isDropdownh6Visible2);
  };
  const toggleh6Dropdown3 = () => {
    setDropdownh6Visible3(!isDropdownh6Visible3);
  };
  const toggleh6Dropdown4 = () => {
    setDropdownh6Visible4(!isCheckInBoxVisible);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOutsideClick = (event) => {
    if (
      (isDropdownh6Visible && !event.target.classList.contains("tab")) ||
      (isDropdownh6Visible2 && !event.target.classList.contains("tab")) ||
      (isDropdownh6Visible4 && !event.target.classList.contains("tab")) ||
      (isDropdownh6Visible3 &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target))
    ) {
      setDropdownh6Visible(false);
      setDropdownh6Visible2(false);
      setDropdownh6Visible4(false);
      setDropdownh6Visible3(false);
    }
  };

  const handleOutsideClick1 = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("tab")
    ) {
      setDropdownh6Visible3(false);
    }
  };

  useEffect(() => {
    if (isDropdownh6Visible3) {
      document.addEventListener("mousedown", handleOutsideClick1);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick1);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick1);
    };
  }, [isDropdownh6Visible3]);

  useEffect(() => {
    if (
      isDropdownh6Visible ||
      isDropdownh6Visible2 ||
      isDropdownh6Visible4 ||
      isDropdownh6Visible3
    ) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [
    isDropdownh6Visible,
    isDropdownh6Visible2,
    isDropdownh6Visible4,
    isDropdownh6Visible3,
  ]);

  const calendarCustomizations = {
    showDoubleView: true,
    className: "custom-calendar",
    calendarType: "US",
  };
  return (
    <div className="search-text-box">
      <div className="box">
        <div className="search-grid">
          <h6
            onClick={toggleh6Dropdown}
            className={isDropdownh6Visible ? "activeh6" : ""}
          >
            Dove vuoi andare? <span>Milano</span>
            {isDropdownh6Visible && (
              <div className="where-hidden-box" ref={dropdownRef}>
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
          </h6>
          <div className="search-grid-card">
            <h6
              onClick={() => {
                setIsCheckInBoxVisible(true);
              }}
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
                      className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab1")}
                    >
                      Dates
                    </div>
                    <div
                      className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                      onClick={() => handleTabClick("tab2")}
                    >
                      Flexible
                    </div>
                  </div>
                  <div className="tab-content">
                    {activeTab === "tab1" && (
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

                    {activeTab === "tab2" && (
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
                  </div>
                </div>
              </div>
            )}
          </div>
          <h6
            onClick={toggleh6Dropdown3}
            className={isDropdownh6Visible3 ? "activeh6" : ""}
          >
            Check Out <span>26/04/2024</span>
            {isDropdownh6Visible3 && (
              <div className="check-in-calendar" ref={dropdownRef}>
                <div className="cic-top">
                  <h6>
                    Select your check-out date{" "}
                    <span>See prices and availability for your dates</span>
                  </h6>
                  <BsXLg />
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
                  </div>
                </div>
              </div>
            )}
          </h6>
          <h6
            onClick={toggleh6Dropdown4}
            className={isDropdownh6Visible4 ? "activeh6" : ""}
          >
            Stanze <span>2 Stanze, 3 adulti</span>
            {isDropdownh6Visible4 && (
              <div className="who-hidden-box" ref={dropdownRef}>
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
          </h6>
          <div className="search-box">
            <BsSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
