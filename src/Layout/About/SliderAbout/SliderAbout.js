import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderAbout.css";
import { Pagination } from "swiper/modules";

// import Slide0 from "../../../image/photo slider/slider1.jpg";
import Slide1 from "../../../image/photo slider/slider3.jpg";
import Slide2 from "../../../image/photo slider/slider2.jpg";
import Slide3 from "../../../image/photo slider/slider14.jpg";
// import Slide4 from "../../../image/photo slider/slider5.jpg";
// import Slide5 from "../../../image/photo slider/slider6.jpg";
// import Slide6 from "../../../image/photo slider/slider7.jpg";

const SliderAbout = () => {
  const Slides = [
    // { id: 1, src: Slide0, title: "انواع سیمان" },
    { id: 2, src: Slide1, title: "هبلکس(بلوک aac)" },
    { id: 3, src: Slide2, title: "انواع گچ سفید کاری" },
    { id: 4, src: Slide3, title: "گچ و خاک آماده" },
    // { id: 5, src: Slide4, title: "انواع سفال" },
    // { id: 6, src: Slide5, title: "انواع آجر طاقی" },
    // { id: 7, src: Slide6, title: "بلوک سیمانی" },
  ];

  return (
    <div style={{marginTop:"3rem"}}>
      <div className="row">
        <div className="col">
          <h1 className="font-iransans" style={{fontSize:"30px",fontWeight:"bold",textAlign:"center",margin:"20px auto"}}>محصولات ما</h1>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "10px" }}
      >
        {Slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt='بازرگانی مصباحی خرید مصالح ساختمانی' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderAbout;
