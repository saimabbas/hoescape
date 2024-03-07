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

const Searchbar = () => {
  const [isDropdownh6Visible, setDropdownh6Visible] = useState(false);
  const [isDropdownh6Visible4, setDropdownh6Visible4] = useState(false);

  const toggleh6Dropdown = () => {
    setDropdownh6Visible(!isDropdownh6Visible);
  };
  const toggleh6Dropdown4 = () => {
    setDropdownh6Visible4(!isDropdownh6Visible4);
  };
  return (
    <div className="search-text-box">
      <div className="box">
        <div className="search-text-content">
          <h6
            onClick={toggleh6Dropdown}
            className={isDropdownh6Visible ? "activeh6" : ""}
          >
            Dove vuoi andare? <span>Milano</span>
          </h6>
          <h6>
            Check In <span>26/04/2024</span>
          </h6>
          <h6>
            Check Out <span>26/04/2024</span>
          </h6>
          <h6
            onClick={toggleh6Dropdown4}
            className={isDropdownh6Visible4 ? "activeh6" : ""}
          >
            Stanze <span>2 Stanze, 3 adulti</span>
          </h6>
          <div className="search-box">
            <BsSearch />
          </div>
        </div>
        {isDropdownh6Visible && (
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
                  Hotel San Giorgio Terme <span>Barano d’Ischia · Italia</span>
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
        {isDropdownh6Visible4 && (
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
    </div>
  );
};

export default Searchbar;
