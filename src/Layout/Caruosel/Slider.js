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
import Slide15 from "../../image/photo slider/slider20.jpg";
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
import { Box, Typography, rgbToHex } from "@mui/material";

const Slider = () => {
  const Slides = [
    { id: 1, src: Slide15, title: "انواع سیمان" },
    { id: 2, src: Slide1, title: "هبلکس(بلوک aac)" },
    { id: 1, src: Slide14, title: "انواع سیمان" },
    { id: 3, src: Slide2, title: "انواع گچ سفید کاری" },
    { id: 4, src: Slide12, title: "انواع گچ سفید کاری" },
    { id: 5, src: Slide13, title: "انواع گچ سفید کاری" },
    { id: 6, src: Slide3, title: "گچ و خاک آماده" },
    { id: 7, src: Slide4, title: "انواع سفال" },
    { id: 8, src: Slide5, title: "انواع آجر طاقی" },
    { id: 9, src: Slide6, title: "بلوک سیمانی" },
    { id: 10, src: Slide7, title: "لوله سیمانی" },
    { id: 11, src: Slide8, title: "خاک سنگ" },
    { id: 12, src: Slide9, title: "پودر سنگ" },
    { id: 13, src: Slide10, title: "سیلیس" },
    { id: 14, src: Slide11, title: "آهک" },
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
          style={{ marginBottom: "50px", paddingBottom: "70px", width: "100%", padding: 40 }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            400: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            910: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1600:{
              slidesPerView: 5,
              spaceBetween: 50,
            }
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Slides.map((item, index) => (
            <SwiperSlide key={index} style={{ position: "relative" }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                width: 250,
                borderRadius: 3,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  '& >.Box': {
                    backgroundPosition: 'right center',
                    color: '#fff',
                    textDecoration: 'none',
                  }
                }
              }}>
                <img 
                alt={item.title}
                src={item.src} style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  zIndex: 10
                }} />
                <Box className='Box' sx={{
                  display: 'flex',
                  width: '80%',
                  height: 40,
                  position: 'absolute',
                  bottom: 10,
                  zIndex: 10,
                  textAlign: 'center',
                  backgroundImage: 'linear-gradient(to right, hsla(39,100%,68%,1) 0%, #c77f1a 51%, #eba51b 100%)',
                  textTransform: 'uppercase',
                  transition: '0.5s',
                  cursor: 'pointer',
                  backgroundSize: '200% auto',
                  color: 'white',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundPosition: 'right center',
                    color: '#fff',
                    textDecoration: 'none',
                  },
                  // boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center'

                }}>
                  <Typography style={{ color: '#111', fontFamily: "IRANSans" }}>
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
