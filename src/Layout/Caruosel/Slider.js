import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide0 from "../../image/photo slider/slider0.jpg";
import Slide1 from "../../image/photo slider/slider1.jpg";
import Slide2 from "../../image/photo slider/slider2.jpg";
import Slide3 from "../../image/photo slider/slider3.jpg";
import Slide4 from "../../image/photo slider/slider4.jpg";
import Slide12 from "../../image/photo slider/slider12.jpg";
import Slide13 from "../../image/photo slider/slider13.jpg";
import Slide14 from "../../image/photo slider/slider14.jpg";
import Slide5 from "../../image/photo slider/slider5.jpg";
import Slide6 from "../../image/photo slider/slider6.jpg";
import Slide7 from "../../image/photo slider/slider7.jpg";
import Slide8 from "../../image/photo slider/slider8.jpg";
import Slide9 from "../../image/photo slider/slider9.jpg";
import Slide10 from "../../image/photo slider/slider10.jpg";
import Slide11 from "../../image/photo slider/slider11.jpg";
import NextIcon from "../../image/next-svgrepo-com.svg";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import SlodeProd from "./SlideProd/SlodeProd";
import { rgbToHex } from "@mui/material";

const Slider = () => {
  const Slides = [
    { id: 1, src: Slide0, title: "انواع سیمان" },
    { id: 2, src: Slide1, title: "هبلکس(بلوک aac)" },
    { id: 3, src: Slide2, title: "انواع گچ سفید کاری" },
    { id: 4, src: Slide12, title: "انواع گچ سفید کاری" },
    { id: 5, src: Slide13, title: "انواع گچ سفید کاری" },
    { id: 6, src: Slide14, title: "گچ و خاک آماده" },
    { id: 7, src: Slide3, title: "گچ و خاک آماده" },
    { id: 8, src: Slide4, title: "انواع سفال" },
    { id: 9, src: Slide5, title: "انواع آجر طاقی" },
    { id: 10, src: Slide6, title: "بلوک سیمانی" },
    { id: 11, src: Slide7, title: "لوله سیمانی" },
    { id: 12, src: Slide8, title: "خاک سنگ" },
    { id: 11, src: Slide9, title: "پودر سنگ" },
    { id: 12, src: Slide10, title: "سیلیس" },
    { id: 13, src: Slide11, title: "آهک" },
  ];

  const PageProd = [
    { id: 1, title: "بازسازی", Page: "/SlideProd" },
    { id: 2, title: "داخلی و خارجی", Page: "/SlideProd2" },
    { id: 3, title: "ساختمان ها", Page1: "/SlodeProd3" },
    { id: 4, title: "همه موارد", Page1: "/SlideProd4" },
  ];
  const [hover, setHover] = useState();
  const handleMouseEnter = (event) => {
    setHover(event);
  };

  const handleMouseLeave = (event) => {
    setHover(event);
  };

  return (
    <div className="Containerr">
      <div
        className="row justify-center"
        style={{ marginBottom: "3.5rem", alignItems: "center" }}
      >
        <div className="col-sm-12 order-2 col-lg-12  text-center">
          <ul className="listButt">
          </ul>
        </div>
        <div className="col-sm-12 order-1 col-lg-3  text-center">
          <div>
            <h1
              className="font-iransans"
              style={{ fontSize: "40px", fontWeight: "bold", margin: "auto" }}
            >
              مصالح ساختمانی
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          style={{ marginBottom: "50px", paddingBottom: "50px", width: "100%" }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Slides.map((item, index) => (
            <SwiperSlide key={index} style={{ position: "relative" }}>
              <img
                style={{ height: "25rem" }}
                src={item.src}
                alt={item.title}
              />
              <div
                className="StleCover"
                onMouseEnter={() => {
                  handleMouseEnter(item.id);
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                <h2
                  className="font-iransans"
                  style={{
                    position: "absolute",
                    top: hover === item.id ? "30%" : "15%",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "0 15px",
                  }}
                >
          عرضه این محصول با قیمت عمده ارائه می شود.
                </h2>
              </div>
              <h2
                className="font-iransans"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "5px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "#3e3f3c",
                  backgroundColor: "rgba(210, 241, 13, 0.9)",
                  borderRadius: "5px",
                  padding: "9px 18px",
                  opacity: hover === item.id ? "0" : "1",
                  
                }}
              >
                {item.title}
              </h2>
              <span
                className="font-iransans absolute bottom-3 left-5"
                style={{
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: "bold",
                  zIndex: "100",
                  cursor: "pointer",
                }}
              >
                اطلاعات بیشتر
                <span
                  style={{
                    position: "absolute",
                    left: "5.5rem",
                    bottom: "0.4rem",
                    width: "12%",
                  }}
                >
                  <img src={NextIcon} alt="next"/>
                </span>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
