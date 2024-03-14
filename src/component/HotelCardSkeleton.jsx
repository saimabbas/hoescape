import React, { useRef, useState, useEffect } from "react";
import Hotel1 from "../assets/img/hotel1.png";
import Hotel2 from "../assets/img/hotel2.jpg";
import Hotel3 from "../assets/img/hotel3.jpg";
import Hotel4 from "../assets/img/hotel2.jpg";
import HotelMini1 from "../assets/img/hotelmini1.png";
import HotelMini2 from "../assets/img/hotelmini2.png";
import HotelMini3 from "../assets/img/hotelmini3.png";
import HotelMini4 from "../assets/img/hotelmini4.png";
import {
  BsCalendar3,
  BsCheckCircleFill,
  BsFillStarFill,
  BsGeoAlt,
} from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";

const HotelCardSkeleton = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="rsr-flex-card hotel-card-skeleton">
      <div className="rsr-flex-left">
        <div className="rsr-thumb-swiper">
          <Swiper>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="rsr-mob-top-box">
        <div className="rsr-mob-card-img">
          <div className="rsr-thumb-swiper">
            {/* <>
              <Swiper
                style={{
                  "--swiper-pagination-color": "#fff",
                  "--swiper-navigation-color": "#000",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4.25}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperthumb"
              >
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hotel4} alt="" />
                </SwiperSlide>
              </Swiper>
            </> */}
            <img src={Hotel1} alt="" />
          </div>
        </div>
        <div className="rsr-mob-card-content">
          <h1>Hotel Gran Paradiso Terme</h1>
          <div className="rsrf-star">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <h5>
            <BsGeoAlt />
            Sonnino, Trentino
          </h5>
          <div className="rsrf-badge">
            <span>Luxury</span>
            <span>Comfort</span>
            <span>Business Friendly</span>
          </div>
          <h4>Vedi Descrizione Hotel</h4>
          <p>
            Troverai ad accoglierti all'ingresso dell 'Av Club Terme Colella un
            pergolato ricco di piante e fiori mediterranei. La struttura, simile
            per estetica alle ville ischitane, e' un luogo familiare ed
            ospitale.
          </p>
        </div>
      </div>
      <div className="rsr-flex-right">
        <div className="rsrf-badge mob-none">
          <span>Luxury</span>
          <span>Comfort</span>
          <span>Business Friendly</span>
        </div>
        <div className="rsrf-content">
          <h1 className="mob-none">AV Isola Verde Hotel Thermal Spa</h1>
          <div className="rsrf-star mob-none">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <h5 className="mob-none">
            <BsGeoAlt />
            Veneto, Cortina d’Ampezzo
          </h5>
          <p>
            <BsCheckCircleFill /> Sconto Prenota Prima: <span>15%</span>
          </p>
          <p>
            {" "}
            <BsCheckCircleFill /> Picco di Prenotazioni nelle ultime 24 ore
          </p>
          <p>
            <BsCheckCircleFill /> Cancellazione Gratuita
          </p>
        </div>

        <h6>
          <BsCalendar3 />
          dal: <b>26 giugno 2024</b> Al: <b>29 giugno 2024</b>
        </h6>
        <br />
        <h6>Pensione Completa con Bevande</h6>
        <div className="rsrf-total">
          <div className="rsrf-tot-left">
            <h2>
              <span>2.232€</span> per <span>7</span> notti
            </h2>
            <h4>con viaggio +150€</h4>
          </div>
          <div className="rsrf-tot-right">
            <button>Vedi Dettagli</button>
            <h5>3 stanze rimaste</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCardSkeleton;
