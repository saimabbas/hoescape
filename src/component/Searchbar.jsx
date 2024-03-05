import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
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
  );
};

export default Searchbar;
