import React, { useState } from "react";
import "./About.css";
import NavbarMain from "../Navbar/NavbarMain";
import SliderAbout from "./SliderAbout/SliderAbout";
import Footer from "../Footer/Footer";
import ModalPhone from "../../container/Modal/ModalPhone";
const About = () => {
  return (
    <div>
      <span className="stylePhone">
        <ModalPhone />
      </span>
      <div className=" StlyeAll">
        <div className="ImageHero">
          <div className="StyleNav">
            <NavbarMain />
          </div>
          <h1 className="font-iransans">
            {" "}
            ما در فروشگاه مصالح ساختمانی چه خدماتی ارائه می دهیم{" "}
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-iransans">
            ما در این مجموعه توانسته ایم در طی سالیان گذشته با ارائه مصالح با
            کیفیت و مناسب به مشتریان خود،رضایت حداکثری را کسب نماییم. مفتخر
            هستیم که توانسته ایم برای آبادانی کشور عزیزمان، قدمی هرچند کوچک
            برداریم ودر حال حاضر نیز تامین کننده بسیاری از مصالح ساختمانی هستیم.
            لازم به ذکر است در کنار تامین مصالح، تامین سایر محصولات ساختمانی را
            نیز انجام می دهیم. و تمام تلاش ما بر این است که در این راستا خدمات
            بیشتری به هم استانی ها و هموطن های عزیز خود ارائه دهیم.
          </p>
        </div>

        <div className="Contaner">
          <SliderAbout />
        </div>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
