import React, { useState } from "react";
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

const Hotelcard = () => {
  const [activeImg, setActiveImg] = useState("1");
  return (
    <div className="rsr-flex-card">
      <div className="rsr-flex-left">
        <div className="short-img-grid">
          <img
            className={activeImg == "1" ? "active-img" : null}
            onClick={() => {
              setActiveImg("1");
            }}
            src={HotelMini1}
            alt=""
          />
          <img
            className={activeImg == "2" ? "active-img" : null}
            onClick={() => {
              setActiveImg("2");
            }}
            src={HotelMini2}
            alt=""
          />
          <img
            className={activeImg == "3" ? "active-img" : null}
            onClick={() => {
              setActiveImg("3");
            }}
            src={HotelMini3}
            alt=""
          />
          <img
            className={activeImg == "4" ? "active-img" : null}
            onClick={() => {
              setActiveImg("4");
            }}
            src={HotelMini4}
            alt=""
          />
        </div>

        {activeImg == "1" ? <img src={Hotel1} alt="" /> : null}
        {activeImg == "2" ? <img src={Hotel2} alt="" /> : null}
        {activeImg == "3" ? <img src={Hotel3} alt="" /> : null}
        {activeImg == "4" ? <img src={Hotel4} alt="" /> : null}
      </div>
      <div className="rsr-flex-right">
        <div className="rsrf-badge">
          <span>Luxury</span>
          <span>Comfort</span>
          <span>Business Friendly</span>
        </div>
        <div className="rsrf-content">
          <h1>AV Isola Verde Hotel Thermal Spa</h1>
          <div className="rsrf-star">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <h5>
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
        <div className="rsrf-services">
          <span className="custom-tooltip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.3522 19.2979C7.48936 18.8702 5.21885 17.7635 3.54064 15.9781C1.86244 14.1926 0.908165 11.7618 0.677823 8.68576C0.66137 8.50478 0.682101 8.34419 0.740016 8.20401C0.79793 8.06384 0.875917 7.94472 0.973977 7.84666C1.0727 7.74794 1.19214 7.6739 1.33232 7.62454C1.4725 7.57518 1.62453 7.56695 1.7884 7.59986C4.7993 8.01119 7.11917 9.17112 8.74802 11.0797C10.3769 12.9882 11.2818 15.3739 11.4628 18.2367C11.4792 18.3848 11.4588 18.5289 11.4016 18.6691C11.3443 18.8093 11.2578 18.9284 11.1419 19.0265C11.0432 19.1252 10.9238 19.2035 10.7836 19.2614C10.6434 19.3193 10.4996 19.3315 10.3522 19.2979ZM10.5003 10.1172C10.2699 9.7552 9.73947 9.22476 8.90893 8.52584C8.07838 7.82691 7.37485 7.36195 6.79834 7.13095C6.92996 6.3083 7.2633 5.26781 7.79835 4.00949C8.3334 2.75116 8.97079 1.61163 9.71052 0.590886C9.80923 0.459262 9.92868 0.360544 10.0689 0.294732C10.209 0.22892 10.3528 0.196014 10.5003 0.196014C10.6483 0.196014 10.7882 0.22892 10.9198 0.294732C11.0514 0.360544 11.1666 0.467489 11.2653 0.615566C12.0057 1.6521 12.6517 2.78736 13.2032 4.02133C13.7547 5.25531 14.0877 6.29185 14.2022 7.13095C13.5605 7.4271 12.8448 7.90852 12.0551 8.57519C11.2653 9.24187 10.7471 9.75586 10.5003 10.1172ZM13.4124 18.5822C13.3795 17.5786 13.2275 16.4394 12.9564 15.1646C12.6852 13.8898 12.2614 12.7914 11.6849 11.8694C12.3924 10.7835 13.4414 9.84569 14.832 9.05595C16.2226 8.26621 17.6909 7.78084 19.2368 7.59986C19.4013 7.56695 19.5494 7.57946 19.681 7.63737C19.8127 7.69529 19.9278 7.77328 20.0265 7.87134C20.1253 7.97005 20.2036 8.08522 20.2615 8.21685C20.3194 8.34847 20.3398 8.49655 20.3227 8.66108C20.1911 11.31 19.4714 13.4614 18.1637 15.1153C16.856 16.7691 15.2723 17.9248 13.4124 18.5822Z"
                fill="#26529C"
              />
            </svg>
            <div className="tooltip-text">
              {" "}
              <div className="arrow-up"></div>
              Animali Ammessi
            </div>
          </span>
          <span className="custom-tooltip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M1.96421 18.9231C1.44594 18.9231 1.00242 18.7387 0.633667 18.3699C0.26491 18.0012 0.080218 17.5573 0.0795898 17.0384V1.96152C0.0795898 1.44325 0.264282 0.999738 0.633667 0.630981C1.00305 0.262225 1.44656 0.0775325 1.96421 0.0769043H17.0411C17.5594 0.0769043 18.0032 0.261597 18.3726 0.630981C18.742 1.00037 18.9264 1.44388 18.9257 1.96152V17.0384C18.9257 17.5567 18.7414 18.0005 18.3726 18.3699C18.0039 18.7393 17.56 18.9237 17.0411 18.9231H1.96421ZM1.96421 13.2692V17.0384H3.84882V15.1538H2.90651V13.2692H1.96421ZM1.96421 11.3846H2.90651C2.90651 11.1176 2.99697 10.894 3.1779 10.7137C3.35882 10.5334 3.58246 10.4429 3.84882 10.4423V8.08652C3.84882 7.69389 3.9864 7.36031 4.26155 7.08579C4.53671 6.81126 4.87028 6.67369 5.26228 6.67306H7.1469C7.53953 6.67306 7.87342 6.81064 8.14857 7.08579C8.42373 7.36094 8.56099 7.69452 8.56036 8.08652V10.4423C8.82735 10.4423 9.0513 10.5328 9.23223 10.7137C9.41315 10.8946 9.5033 11.1182 9.50267 11.3846H17.0411V1.96152H1.96421V11.3846ZM6.20459 5.73075C5.81196 5.73075 5.47839 5.59349 5.20386 5.31896C4.92933 5.04444 4.79176 4.71055 4.79113 4.31729C4.79113 3.92466 4.92871 3.59108 5.20386 3.31656C5.47901 3.04203 5.81259 2.90446 6.20459 2.90383C6.59722 2.90383 6.93111 3.0414 7.20626 3.31656C7.48142 3.59171 7.61868 3.92529 7.61805 4.31729C7.61805 4.70992 7.48079 5.04381 7.20626 5.31896C6.93174 5.59412 6.59785 5.73138 6.20459 5.73075ZM5.73344 17.0384H6.67574V15.1538H5.73344V17.0384ZM8.56036 17.0384H17.0411V13.2692H9.50267V15.1538H8.56036V17.0384ZM9.73824 7.61537C9.76965 7.4112 9.78944 7.25792 9.79761 7.15552C9.80578 7.05312 9.80955 6.94727 9.80892 6.83796C9.80892 6.66521 9.77374 6.5003 9.70338 6.34325C9.63302 6.1862 9.48759 5.97418 9.26709 5.70719C9.03151 5.4088 8.85499 5.1104 8.73751 4.812C8.62004 4.5136 8.56099 4.20735 8.56036 3.89325C8.56036 3.76761 8.56821 3.6382 8.58392 3.50502L8.65459 2.90383H10.0681C10.0366 3.07658 10.0131 3.23772 9.99738 3.38723C9.98167 3.53674 9.97382 3.70542 9.97382 3.89325C9.97382 4.06601 10.0093 4.23499 10.0803 4.40021C10.1513 4.56543 10.2728 4.74196 10.445 4.92979C10.7277 5.2753 10.9318 5.60134 11.0575 5.9079C11.1831 6.21447 11.2459 6.52449 11.2459 6.83796C11.2459 7.01072 11.2381 7.15207 11.2224 7.262C11.2067 7.37194 11.1831 7.48973 11.1517 7.61537H9.73824ZM12.094 7.61537C12.1254 7.4112 12.1452 7.25792 12.1534 7.15552C12.1615 7.05312 12.1653 6.94727 12.1647 6.83796C12.1647 6.66521 12.1295 6.5003 12.0591 6.34325C11.9888 6.1862 11.8434 5.97418 11.6229 5.70719C11.3873 5.4088 11.2108 5.1104 11.0933 4.812C10.9758 4.5136 10.9168 4.20735 10.9161 3.89325C10.9161 3.76761 10.924 3.6382 10.9397 3.50502L11.0104 2.90383H12.4238C12.3924 3.07658 12.3689 3.23772 12.3531 3.38723C12.3374 3.53674 12.3296 3.70542 12.3296 3.89325C12.3296 4.06601 12.3651 4.23499 12.4361 4.40021C12.5071 4.56543 12.6286 4.74196 12.8007 4.92979C13.0834 5.2753 13.2876 5.60134 13.4132 5.9079C13.5389 6.21447 13.6017 6.52449 13.6017 6.83796C13.6017 7.01072 13.5939 7.15207 13.5781 7.262C13.5624 7.37194 13.5389 7.48973 13.5075 7.61537H12.094ZM14.4969 7.61537C14.5283 7.4112 14.5481 7.25792 14.5563 7.15552C14.5644 7.05312 14.5682 6.94727 14.5676 6.83796C14.5676 6.66521 14.5324 6.5003 14.462 6.34325C14.3917 6.1862 14.2462 5.97418 14.0257 5.70719C13.7902 5.4088 13.6136 5.1104 13.4962 4.812C13.3787 4.5136 13.3196 4.20735 13.319 3.89325C13.319 3.76761 13.3269 3.6382 13.3426 3.50502L13.4132 2.90383H14.8267C14.7953 3.07658 14.7717 3.23772 14.756 3.38723C14.7403 3.53674 14.7325 3.70542 14.7325 3.89325C14.7325 4.06601 14.768 4.23499 14.839 4.40021C14.9099 4.56543 15.0315 4.74196 15.2036 4.92979C15.4863 5.2753 15.6905 5.60134 15.8161 5.9079C15.9418 6.21447 16.0046 6.52449 16.0046 6.83796C16.0046 7.01072 15.9967 7.15207 15.981 7.262C15.9653 7.37194 15.9418 7.48973 15.9104 7.61537H14.4969Z"
                fill="#26529C"
              />
            </svg>
            <div className="tooltip-text">
              {" "}
              <div className="arrow-up"></div>
              Animali1
            </div>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.909 0.0139466C20.4011 0.0138663 20.8865 0.126961 21.3279 0.344484C21.7692 0.562007 22.1546 0.87813 22.4543 1.2684L22.5784 1.44272L23.7227 3.15918C24.0295 3.61927 24.2123 4.15087 24.2531 4.70239L24.2617 4.93981V11.7778C24.2618 12.3175 24.058 12.8372 23.6911 13.2329C23.3242 13.6285 22.8213 13.8709 22.2832 13.9114L22.1228 13.9167H21.941C21.7254 14.5266 21.3305 15.0571 20.8081 15.4387C20.2858 15.8202 19.6603 16.035 19.0137 16.0549C18.3672 16.0748 17.7297 15.8989 17.1849 15.5501C16.64 15.2014 16.2133 14.6962 15.9606 14.1007L15.8879 13.9167H9.10657C8.89077 14.5263 8.49589 15.0564 7.97364 15.4377C7.4514 15.819 6.82616 16.0337 6.17984 16.0536C5.53352 16.0734 4.89627 15.8976 4.35158 15.5492C3.80689 15.2007 3.38016 14.6958 3.1273 14.1007L3.05458 13.9167H2.87278C2.33316 13.9169 1.81342 13.7131 1.41774 13.3462C1.02207 12.9793 0.779705 12.4763 0.739234 11.9382L0.733887 11.7778V3.22228C0.733841 2.40393 1.04651 1.61649 1.60793 1.02108C2.16934 0.425675 2.93706 0.0673038 3.754 0.0192939L3.94222 0.0139466H19.909ZM18.9144 11.7778C18.6308 11.7778 18.3588 11.8905 18.1582 12.0911C17.9577 12.2916 17.845 12.5636 17.845 12.8473C17.845 13.1309 17.9577 13.4029 18.1582 13.6035C18.3588 13.804 18.6308 13.9167 18.9144 13.9167C19.1981 13.9167 19.4701 13.804 19.6707 13.6035C19.8712 13.4029 19.9839 13.1309 19.9839 12.8473C19.9839 12.5636 19.8712 12.2916 19.6707 12.0911C19.4701 11.8905 19.1981 11.7778 18.9144 11.7778ZM6.08111 11.7778C5.79747 11.7778 5.52546 11.8905 5.3249 12.0911C5.12434 12.2916 5.01166 12.5636 5.01166 12.8473C5.01166 13.1309 5.12434 13.4029 5.3249 13.6035C5.52546 13.804 5.79747 13.9167 6.08111 13.9167C6.36474 13.9167 6.63676 13.804 6.83732 13.6035C7.03788 13.4029 7.15055 13.1309 7.15055 12.8473C7.15055 12.5636 7.03788 12.2916 6.83732 12.0911C6.63676 11.8905 6.36474 11.7778 6.08111 11.7778ZM19.909 2.15284H18.9144V6.43061H22.1228V4.93981C22.1228 4.72856 22.0603 4.52202 21.9431 4.34626L20.7988 2.62874C20.7011 2.48231 20.5688 2.36227 20.4136 2.27925C20.2584 2.19623 20.085 2.15281 19.909 2.15284ZM6.08111 2.15284H3.94222C3.68028 2.15287 3.42746 2.24904 3.23171 2.4231C3.03597 2.59716 2.91091 2.83701 2.88026 3.09715L2.87278 3.22228V5.36117H6.08111V2.15284ZM11.4283 2.15284H8.22V5.36117H11.4283V2.15284ZM16.7756 2.15284H13.5672V5.36117H16.7756V2.15284Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.3522 19.2979C7.48936 18.8702 5.21885 17.7635 3.54064 15.9781C1.86244 14.1926 0.908165 11.7618 0.677823 8.68576C0.66137 8.50478 0.682101 8.34419 0.740016 8.20401C0.79793 8.06384 0.875917 7.94472 0.973977 7.84666C1.0727 7.74794 1.19214 7.6739 1.33232 7.62454C1.4725 7.57518 1.62453 7.56695 1.7884 7.59986C4.7993 8.01119 7.11917 9.17112 8.74802 11.0797C10.3769 12.9882 11.2818 15.3739 11.4628 18.2367C11.4792 18.3848 11.4588 18.5289 11.4016 18.6691C11.3443 18.8093 11.2578 18.9284 11.1419 19.0265C11.0432 19.1252 10.9238 19.2035 10.7836 19.2614C10.6434 19.3193 10.4996 19.3315 10.3522 19.2979ZM10.5003 10.1172C10.2699 9.7552 9.73947 9.22476 8.90893 8.52584C8.07838 7.82691 7.37485 7.36195 6.79834 7.13095C6.92996 6.3083 7.2633 5.26781 7.79835 4.00949C8.3334 2.75116 8.97079 1.61163 9.71052 0.590886C9.80923 0.459262 9.92868 0.360544 10.0689 0.294732C10.209 0.22892 10.3528 0.196014 10.5003 0.196014C10.6483 0.196014 10.7882 0.22892 10.9198 0.294732C11.0514 0.360544 11.1666 0.467489 11.2653 0.615566C12.0057 1.6521 12.6517 2.78736 13.2032 4.02133C13.7547 5.25531 14.0877 6.29185 14.2022 7.13095C13.5605 7.4271 12.8448 7.90852 12.0551 8.57519C11.2653 9.24187 10.7471 9.75586 10.5003 10.1172ZM13.4124 18.5822C13.3795 17.5786 13.2275 16.4394 12.9564 15.1646C12.6852 13.8898 12.2614 12.7914 11.6849 11.8694C12.3924 10.7835 13.4414 9.84569 14.832 9.05595C16.2226 8.26621 17.6909 7.78084 19.2368 7.59986C19.4013 7.56695 19.5494 7.57946 19.681 7.63737C19.8127 7.69529 19.9278 7.77328 20.0265 7.87134C20.1253 7.97005 20.2036 8.08522 20.2615 8.21685C20.3194 8.34847 20.3398 8.49655 20.3227 8.66108C20.1911 11.31 19.4714 13.4614 18.1637 15.1153C16.856 16.7691 15.2723 17.9248 13.4124 18.5822Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M1.96421 18.9231C1.44594 18.9231 1.00242 18.7387 0.633667 18.3699C0.26491 18.0012 0.080218 17.5573 0.0795898 17.0384V1.96152C0.0795898 1.44325 0.264282 0.999738 0.633667 0.630981C1.00305 0.262225 1.44656 0.0775325 1.96421 0.0769043H17.0411C17.5594 0.0769043 18.0032 0.261597 18.3726 0.630981C18.742 1.00037 18.9264 1.44388 18.9257 1.96152V17.0384C18.9257 17.5567 18.7414 18.0005 18.3726 18.3699C18.0039 18.7393 17.56 18.9237 17.0411 18.9231H1.96421ZM1.96421 13.2692V17.0384H3.84882V15.1538H2.90651V13.2692H1.96421ZM1.96421 11.3846H2.90651C2.90651 11.1176 2.99697 10.894 3.1779 10.7137C3.35882 10.5334 3.58246 10.4429 3.84882 10.4423V8.08652C3.84882 7.69389 3.9864 7.36031 4.26155 7.08579C4.53671 6.81126 4.87028 6.67369 5.26228 6.67306H7.1469C7.53953 6.67306 7.87342 6.81064 8.14857 7.08579C8.42373 7.36094 8.56099 7.69452 8.56036 8.08652V10.4423C8.82735 10.4423 9.0513 10.5328 9.23223 10.7137C9.41315 10.8946 9.5033 11.1182 9.50267 11.3846H17.0411V1.96152H1.96421V11.3846ZM6.20459 5.73075C5.81196 5.73075 5.47839 5.59349 5.20386 5.31896C4.92933 5.04444 4.79176 4.71055 4.79113 4.31729C4.79113 3.92466 4.92871 3.59108 5.20386 3.31656C5.47901 3.04203 5.81259 2.90446 6.20459 2.90383C6.59722 2.90383 6.93111 3.0414 7.20626 3.31656C7.48142 3.59171 7.61868 3.92529 7.61805 4.31729C7.61805 4.70992 7.48079 5.04381 7.20626 5.31896C6.93174 5.59412 6.59785 5.73138 6.20459 5.73075ZM5.73344 17.0384H6.67574V15.1538H5.73344V17.0384ZM8.56036 17.0384H17.0411V13.2692H9.50267V15.1538H8.56036V17.0384ZM9.73824 7.61537C9.76965 7.4112 9.78944 7.25792 9.79761 7.15552C9.80578 7.05312 9.80955 6.94727 9.80892 6.83796C9.80892 6.66521 9.77374 6.5003 9.70338 6.34325C9.63302 6.1862 9.48759 5.97418 9.26709 5.70719C9.03151 5.4088 8.85499 5.1104 8.73751 4.812C8.62004 4.5136 8.56099 4.20735 8.56036 3.89325C8.56036 3.76761 8.56821 3.6382 8.58392 3.50502L8.65459 2.90383H10.0681C10.0366 3.07658 10.0131 3.23772 9.99738 3.38723C9.98167 3.53674 9.97382 3.70542 9.97382 3.89325C9.97382 4.06601 10.0093 4.23499 10.0803 4.40021C10.1513 4.56543 10.2728 4.74196 10.445 4.92979C10.7277 5.2753 10.9318 5.60134 11.0575 5.9079C11.1831 6.21447 11.2459 6.52449 11.2459 6.83796C11.2459 7.01072 11.2381 7.15207 11.2224 7.262C11.2067 7.37194 11.1831 7.48973 11.1517 7.61537H9.73824ZM12.094 7.61537C12.1254 7.4112 12.1452 7.25792 12.1534 7.15552C12.1615 7.05312 12.1653 6.94727 12.1647 6.83796C12.1647 6.66521 12.1295 6.5003 12.0591 6.34325C11.9888 6.1862 11.8434 5.97418 11.6229 5.70719C11.3873 5.4088 11.2108 5.1104 11.0933 4.812C10.9758 4.5136 10.9168 4.20735 10.9161 3.89325C10.9161 3.76761 10.924 3.6382 10.9397 3.50502L11.0104 2.90383H12.4238C12.3924 3.07658 12.3689 3.23772 12.3531 3.38723C12.3374 3.53674 12.3296 3.70542 12.3296 3.89325C12.3296 4.06601 12.3651 4.23499 12.4361 4.40021C12.5071 4.56543 12.6286 4.74196 12.8007 4.92979C13.0834 5.2753 13.2876 5.60134 13.4132 5.9079C13.5389 6.21447 13.6017 6.52449 13.6017 6.83796C13.6017 7.01072 13.5939 7.15207 13.5781 7.262C13.5624 7.37194 13.5389 7.48973 13.5075 7.61537H12.094ZM14.4969 7.61537C14.5283 7.4112 14.5481 7.25792 14.5563 7.15552C14.5644 7.05312 14.5682 6.94727 14.5676 6.83796C14.5676 6.66521 14.5324 6.5003 14.462 6.34325C14.3917 6.1862 14.2462 5.97418 14.0257 5.70719C13.7902 5.4088 13.6136 5.1104 13.4962 4.812C13.3787 4.5136 13.3196 4.20735 13.319 3.89325C13.319 3.76761 13.3269 3.6382 13.3426 3.50502L13.4132 2.90383H14.8267C14.7953 3.07658 14.7717 3.23772 14.756 3.38723C14.7403 3.53674 14.7325 3.70542 14.7325 3.89325C14.7325 4.06601 14.768 4.23499 14.839 4.40021C14.9099 4.56543 15.0315 4.74196 15.2036 4.92979C15.4863 5.2753 15.6905 5.60134 15.8161 5.9079C15.9418 6.21447 16.0046 6.52449 16.0046 6.83796C16.0046 7.01072 15.9967 7.15207 15.981 7.262C15.9653 7.37194 15.9418 7.48973 15.9104 7.61537H14.4969Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.909 0.0139466C20.4011 0.0138663 20.8865 0.126961 21.3279 0.344484C21.7692 0.562007 22.1546 0.87813 22.4543 1.2684L22.5784 1.44272L23.7227 3.15918C24.0295 3.61927 24.2123 4.15087 24.2531 4.70239L24.2617 4.93981V11.7778C24.2618 12.3175 24.058 12.8372 23.6911 13.2329C23.3242 13.6285 22.8213 13.8709 22.2832 13.9114L22.1228 13.9167H21.941C21.7254 14.5266 21.3305 15.0571 20.8081 15.4387C20.2858 15.8202 19.6603 16.035 19.0137 16.0549C18.3672 16.0748 17.7297 15.8989 17.1849 15.5501C16.64 15.2014 16.2133 14.6962 15.9606 14.1007L15.8879 13.9167H9.10657C8.89077 14.5263 8.49589 15.0564 7.97364 15.4377C7.4514 15.819 6.82616 16.0337 6.17984 16.0536C5.53352 16.0734 4.89627 15.8976 4.35158 15.5492C3.80689 15.2007 3.38016 14.6958 3.1273 14.1007L3.05458 13.9167H2.87278C2.33316 13.9169 1.81342 13.7131 1.41774 13.3462C1.02207 12.9793 0.779705 12.4763 0.739234 11.9382L0.733887 11.7778V3.22228C0.733841 2.40393 1.04651 1.61649 1.60793 1.02108C2.16934 0.425675 2.93706 0.0673038 3.754 0.0192939L3.94222 0.0139466H19.909ZM18.9144 11.7778C18.6308 11.7778 18.3588 11.8905 18.1582 12.0911C17.9577 12.2916 17.845 12.5636 17.845 12.8473C17.845 13.1309 17.9577 13.4029 18.1582 13.6035C18.3588 13.804 18.6308 13.9167 18.9144 13.9167C19.1981 13.9167 19.4701 13.804 19.6707 13.6035C19.8712 13.4029 19.9839 13.1309 19.9839 12.8473C19.9839 12.5636 19.8712 12.2916 19.6707 12.0911C19.4701 11.8905 19.1981 11.7778 18.9144 11.7778ZM6.08111 11.7778C5.79747 11.7778 5.52546 11.8905 5.3249 12.0911C5.12434 12.2916 5.01166 12.5636 5.01166 12.8473C5.01166 13.1309 5.12434 13.4029 5.3249 13.6035C5.52546 13.804 5.79747 13.9167 6.08111 13.9167C6.36474 13.9167 6.63676 13.804 6.83732 13.6035C7.03788 13.4029 7.15055 13.1309 7.15055 12.8473C7.15055 12.5636 7.03788 12.2916 6.83732 12.0911C6.63676 11.8905 6.36474 11.7778 6.08111 11.7778ZM19.909 2.15284H18.9144V6.43061H22.1228V4.93981C22.1228 4.72856 22.0603 4.52202 21.9431 4.34626L20.7988 2.62874C20.7011 2.48231 20.5688 2.36227 20.4136 2.27925C20.2584 2.19623 20.085 2.15281 19.909 2.15284ZM6.08111 2.15284H3.94222C3.68028 2.15287 3.42746 2.24904 3.23171 2.4231C3.03597 2.59716 2.91091 2.83701 2.88026 3.09715L2.87278 3.22228V5.36117H6.08111V2.15284ZM11.4283 2.15284H8.22V5.36117H11.4283V2.15284ZM16.7756 2.15284H13.5672V5.36117H16.7756V2.15284Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.3522 19.2979C7.48936 18.8702 5.21885 17.7635 3.54064 15.9781C1.86244 14.1926 0.908165 11.7618 0.677823 8.68576C0.66137 8.50478 0.682101 8.34419 0.740016 8.20401C0.79793 8.06384 0.875917 7.94472 0.973977 7.84666C1.0727 7.74794 1.19214 7.6739 1.33232 7.62454C1.4725 7.57518 1.62453 7.56695 1.7884 7.59986C4.7993 8.01119 7.11917 9.17112 8.74802 11.0797C10.3769 12.9882 11.2818 15.3739 11.4628 18.2367C11.4792 18.3848 11.4588 18.5289 11.4016 18.6691C11.3443 18.8093 11.2578 18.9284 11.1419 19.0265C11.0432 19.1252 10.9238 19.2035 10.7836 19.2614C10.6434 19.3193 10.4996 19.3315 10.3522 19.2979ZM10.5003 10.1172C10.2699 9.7552 9.73947 9.22476 8.90893 8.52584C8.07838 7.82691 7.37485 7.36195 6.79834 7.13095C6.92996 6.3083 7.2633 5.26781 7.79835 4.00949C8.3334 2.75116 8.97079 1.61163 9.71052 0.590886C9.80923 0.459262 9.92868 0.360544 10.0689 0.294732C10.209 0.22892 10.3528 0.196014 10.5003 0.196014C10.6483 0.196014 10.7882 0.22892 10.9198 0.294732C11.0514 0.360544 11.1666 0.467489 11.2653 0.615566C12.0057 1.6521 12.6517 2.78736 13.2032 4.02133C13.7547 5.25531 14.0877 6.29185 14.2022 7.13095C13.5605 7.4271 12.8448 7.90852 12.0551 8.57519C11.2653 9.24187 10.7471 9.75586 10.5003 10.1172ZM13.4124 18.5822C13.3795 17.5786 13.2275 16.4394 12.9564 15.1646C12.6852 13.8898 12.2614 12.7914 11.6849 11.8694C12.3924 10.7835 13.4414 9.84569 14.832 9.05595C16.2226 8.26621 17.6909 7.78084 19.2368 7.59986C19.4013 7.56695 19.5494 7.57946 19.681 7.63737C19.8127 7.69529 19.9278 7.77328 20.0265 7.87134C20.1253 7.97005 20.2036 8.08522 20.2615 8.21685C20.3194 8.34847 20.3398 8.49655 20.3227 8.66108C20.1911 11.31 19.4714 13.4614 18.1637 15.1153C16.856 16.7691 15.2723 17.9248 13.4124 18.5822Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M1.96421 18.9231C1.44594 18.9231 1.00242 18.7387 0.633667 18.3699C0.26491 18.0012 0.080218 17.5573 0.0795898 17.0384V1.96152C0.0795898 1.44325 0.264282 0.999738 0.633667 0.630981C1.00305 0.262225 1.44656 0.0775325 1.96421 0.0769043H17.0411C17.5594 0.0769043 18.0032 0.261597 18.3726 0.630981C18.742 1.00037 18.9264 1.44388 18.9257 1.96152V17.0384C18.9257 17.5567 18.7414 18.0005 18.3726 18.3699C18.0039 18.7393 17.56 18.9237 17.0411 18.9231H1.96421ZM1.96421 13.2692V17.0384H3.84882V15.1538H2.90651V13.2692H1.96421ZM1.96421 11.3846H2.90651C2.90651 11.1176 2.99697 10.894 3.1779 10.7137C3.35882 10.5334 3.58246 10.4429 3.84882 10.4423V8.08652C3.84882 7.69389 3.9864 7.36031 4.26155 7.08579C4.53671 6.81126 4.87028 6.67369 5.26228 6.67306H7.1469C7.53953 6.67306 7.87342 6.81064 8.14857 7.08579C8.42373 7.36094 8.56099 7.69452 8.56036 8.08652V10.4423C8.82735 10.4423 9.0513 10.5328 9.23223 10.7137C9.41315 10.8946 9.5033 11.1182 9.50267 11.3846H17.0411V1.96152H1.96421V11.3846ZM6.20459 5.73075C5.81196 5.73075 5.47839 5.59349 5.20386 5.31896C4.92933 5.04444 4.79176 4.71055 4.79113 4.31729C4.79113 3.92466 4.92871 3.59108 5.20386 3.31656C5.47901 3.04203 5.81259 2.90446 6.20459 2.90383C6.59722 2.90383 6.93111 3.0414 7.20626 3.31656C7.48142 3.59171 7.61868 3.92529 7.61805 4.31729C7.61805 4.70992 7.48079 5.04381 7.20626 5.31896C6.93174 5.59412 6.59785 5.73138 6.20459 5.73075ZM5.73344 17.0384H6.67574V15.1538H5.73344V17.0384ZM8.56036 17.0384H17.0411V13.2692H9.50267V15.1538H8.56036V17.0384ZM9.73824 7.61537C9.76965 7.4112 9.78944 7.25792 9.79761 7.15552C9.80578 7.05312 9.80955 6.94727 9.80892 6.83796C9.80892 6.66521 9.77374 6.5003 9.70338 6.34325C9.63302 6.1862 9.48759 5.97418 9.26709 5.70719C9.03151 5.4088 8.85499 5.1104 8.73751 4.812C8.62004 4.5136 8.56099 4.20735 8.56036 3.89325C8.56036 3.76761 8.56821 3.6382 8.58392 3.50502L8.65459 2.90383H10.0681C10.0366 3.07658 10.0131 3.23772 9.99738 3.38723C9.98167 3.53674 9.97382 3.70542 9.97382 3.89325C9.97382 4.06601 10.0093 4.23499 10.0803 4.40021C10.1513 4.56543 10.2728 4.74196 10.445 4.92979C10.7277 5.2753 10.9318 5.60134 11.0575 5.9079C11.1831 6.21447 11.2459 6.52449 11.2459 6.83796C11.2459 7.01072 11.2381 7.15207 11.2224 7.262C11.2067 7.37194 11.1831 7.48973 11.1517 7.61537H9.73824ZM12.094 7.61537C12.1254 7.4112 12.1452 7.25792 12.1534 7.15552C12.1615 7.05312 12.1653 6.94727 12.1647 6.83796C12.1647 6.66521 12.1295 6.5003 12.0591 6.34325C11.9888 6.1862 11.8434 5.97418 11.6229 5.70719C11.3873 5.4088 11.2108 5.1104 11.0933 4.812C10.9758 4.5136 10.9168 4.20735 10.9161 3.89325C10.9161 3.76761 10.924 3.6382 10.9397 3.50502L11.0104 2.90383H12.4238C12.3924 3.07658 12.3689 3.23772 12.3531 3.38723C12.3374 3.53674 12.3296 3.70542 12.3296 3.89325C12.3296 4.06601 12.3651 4.23499 12.4361 4.40021C12.5071 4.56543 12.6286 4.74196 12.8007 4.92979C13.0834 5.2753 13.2876 5.60134 13.4132 5.9079C13.5389 6.21447 13.6017 6.52449 13.6017 6.83796C13.6017 7.01072 13.5939 7.15207 13.5781 7.262C13.5624 7.37194 13.5389 7.48973 13.5075 7.61537H12.094ZM14.4969 7.61537C14.5283 7.4112 14.5481 7.25792 14.5563 7.15552C14.5644 7.05312 14.5682 6.94727 14.5676 6.83796C14.5676 6.66521 14.5324 6.5003 14.462 6.34325C14.3917 6.1862 14.2462 5.97418 14.0257 5.70719C13.7902 5.4088 13.6136 5.1104 13.4962 4.812C13.3787 4.5136 13.3196 4.20735 13.319 3.89325C13.319 3.76761 13.3269 3.6382 13.3426 3.50502L13.4132 2.90383H14.8267C14.7953 3.07658 14.7717 3.23772 14.756 3.38723C14.7403 3.53674 14.7325 3.70542 14.7325 3.89325C14.7325 4.06601 14.768 4.23499 14.839 4.40021C14.9099 4.56543 15.0315 4.74196 15.2036 4.92979C15.4863 5.2753 15.6905 5.60134 15.8161 5.9079C15.9418 6.21447 16.0046 6.52449 16.0046 6.83796C16.0046 7.01072 15.9967 7.15207 15.981 7.262C15.9653 7.37194 15.9418 7.48973 15.9104 7.61537H14.4969Z"
                fill="#26529C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.909 0.0139466C20.4011 0.0138663 20.8865 0.126961 21.3279 0.344484C21.7692 0.562007 22.1546 0.87813 22.4543 1.2684L22.5784 1.44272L23.7227 3.15918C24.0295 3.61927 24.2123 4.15087 24.2531 4.70239L24.2617 4.93981V11.7778C24.2618 12.3175 24.058 12.8372 23.6911 13.2329C23.3242 13.6285 22.8213 13.8709 22.2832 13.9114L22.1228 13.9167H21.941C21.7254 14.5266 21.3305 15.0571 20.8081 15.4387C20.2858 15.8202 19.6603 16.035 19.0137 16.0549C18.3672 16.0748 17.7297 15.8989 17.1849 15.5501C16.64 15.2014 16.2133 14.6962 15.9606 14.1007L15.8879 13.9167H9.10657C8.89077 14.5263 8.49589 15.0564 7.97364 15.4377C7.4514 15.819 6.82616 16.0337 6.17984 16.0536C5.53352 16.0734 4.89627 15.8976 4.35158 15.5492C3.80689 15.2007 3.38016 14.6958 3.1273 14.1007L3.05458 13.9167H2.87278C2.33316 13.9169 1.81342 13.7131 1.41774 13.3462C1.02207 12.9793 0.779705 12.4763 0.739234 11.9382L0.733887 11.7778V3.22228C0.733841 2.40393 1.04651 1.61649 1.60793 1.02108C2.16934 0.425675 2.93706 0.0673038 3.754 0.0192939L3.94222 0.0139466H19.909ZM18.9144 11.7778C18.6308 11.7778 18.3588 11.8905 18.1582 12.0911C17.9577 12.2916 17.845 12.5636 17.845 12.8473C17.845 13.1309 17.9577 13.4029 18.1582 13.6035C18.3588 13.804 18.6308 13.9167 18.9144 13.9167C19.1981 13.9167 19.4701 13.804 19.6707 13.6035C19.8712 13.4029 19.9839 13.1309 19.9839 12.8473C19.9839 12.5636 19.8712 12.2916 19.6707 12.0911C19.4701 11.8905 19.1981 11.7778 18.9144 11.7778ZM6.08111 11.7778C5.79747 11.7778 5.52546 11.8905 5.3249 12.0911C5.12434 12.2916 5.01166 12.5636 5.01166 12.8473C5.01166 13.1309 5.12434 13.4029 5.3249 13.6035C5.52546 13.804 5.79747 13.9167 6.08111 13.9167C6.36474 13.9167 6.63676 13.804 6.83732 13.6035C7.03788 13.4029 7.15055 13.1309 7.15055 12.8473C7.15055 12.5636 7.03788 12.2916 6.83732 12.0911C6.63676 11.8905 6.36474 11.7778 6.08111 11.7778ZM19.909 2.15284H18.9144V6.43061H22.1228V4.93981C22.1228 4.72856 22.0603 4.52202 21.9431 4.34626L20.7988 2.62874C20.7011 2.48231 20.5688 2.36227 20.4136 2.27925C20.2584 2.19623 20.085 2.15281 19.909 2.15284ZM6.08111 2.15284H3.94222C3.68028 2.15287 3.42746 2.24904 3.23171 2.4231C3.03597 2.59716 2.91091 2.83701 2.88026 3.09715L2.87278 3.22228V5.36117H6.08111V2.15284ZM11.4283 2.15284H8.22V5.36117H11.4283V2.15284ZM16.7756 2.15284H13.5672V5.36117H16.7756V2.15284Z"
                fill="#26529C"
              />
            </svg>
          </span>
        </div>
        <h6>
          <BsCalendar3 />
          dal: <b>26 giugno 2024</b> Al: <b>29 giugno 2024</b>
        </h6>
        <h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
          >
            <path
              d="M9.80355 3.97273C7.87661 3.97273 6.30893 5.61338 6.30893 7.63001C6.30893 9.64663 7.87661 11.2873 9.80355 11.2873C11.7305 11.2873 13.2982 9.64663 13.2982 7.63001C13.2982 5.61338 11.7305 3.97273 9.80355 3.97273ZM18.6035 8.18215V0.179989C18.6035 0.142331 18.5922 0.105629 18.5712 0.0750552C18.5501 0.0444811 18.5205 0.021577 18.4864 0.00957093C18.4523 -0.0024351 18.4154 -0.00293763 18.3811 0.00813432C18.3467 0.0192063 18.3165 0.0412943 18.2947 0.0712852C17.3407 1.38795 16.8243 2.99501 16.8244 4.6474V7.57482C16.8244 7.91056 17.0844 8.18277 17.4053 8.18277H17.6474C17.4087 10.7632 17.251 14.3722 17.251 14.7947C17.251 15.4605 17.6425 16.0001 18.1255 16.0001C18.6085 16.0001 19 15.4604 19 14.7947C19 14.3721 18.8422 10.7626 18.6035 8.18215ZM2.53891 6.59591C3.02289 6.2891 3.34637 5.7328 3.34637 5.09736L3.10665 0.995401C3.10186 0.917404 3.06782 0.844544 3.01195 0.792679C2.95608 0.740815 2.8829 0.714143 2.80833 0.71847C2.73377 0.722797 2.66385 0.757772 2.6138 0.815783C2.56375 0.873794 2.53762 0.950145 2.5411 1.02822L2.697 4.31802C2.697 4.40682 2.66329 4.49198 2.6033 4.55477C2.5433 4.61756 2.46193 4.65283 2.37708 4.65283C2.29223 4.65283 2.21086 4.61756 2.15086 4.55477C2.09086 4.49198 2.05716 4.40682 2.05716 4.31802L1.97927 1.02958C1.97711 0.946128 1.94393 0.866852 1.88677 0.808625C1.82961 0.750397 1.75299 0.717815 1.67322 0.717815C1.59346 0.717815 1.51684 0.750397 1.45968 0.808625C1.40252 0.866852 1.36933 0.946128 1.36718 1.02958L1.28929 4.31802C1.28929 4.40682 1.25559 4.49198 1.19559 4.55477C1.13559 4.61756 1.05422 4.65283 0.969371 4.65283C0.884523 4.65283 0.80315 4.61756 0.743154 4.55477C0.683157 4.49198 0.649451 4.40682 0.649451 4.31802L0.805348 1.02822C0.813363 0.859007 0.684297 0.717137 0.5225 0.717137C0.450385 0.717126 0.380983 0.745912 0.328455 0.797622C0.275928 0.849332 0.244233 0.92007 0.239838 0.995401L0 5.0974C0 5.73284 0.323445 6.2891 0.807463 6.59594C0.961753 6.69383 1.08609 6.83583 1.16582 7.00522C1.24554 7.1746 1.27734 7.36431 1.25745 7.55198C0.984215 10.1291 0.798668 14.3365 0.798668 14.7948C0.798668 15.4605 1.19021 16.0002 1.67319 16.0002C2.15617 16.0002 2.54771 15.4605 2.54771 14.7948C2.54771 14.3365 2.36212 10.1291 2.08892 7.55198C2.06908 7.36431 2.10089 7.17461 2.18061 7.00523C2.26033 6.83584 2.38465 6.69382 2.53891 6.59591Z"
              fill="black"
            />
          </svg>
          Pensione Completa con Bevande
        </h6>
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

export default Hotelcard;
