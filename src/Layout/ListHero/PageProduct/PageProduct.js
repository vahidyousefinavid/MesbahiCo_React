import React from "react";

import Slide0 from "../../../image/photo slider/slider0.jpg";
import Slide1 from "../../../image/photo slider/slider1.jpg";
import Slide2 from "../../../image/photo slider/slider2.jpg";
import Slide3 from "../../../image/photo slider/slider3.jpg";
import Slide4 from "../../../image/photo slider/slider4.jpg";
import Slide12 from "../../../image/photo slider/slider12.jpg";
import Slide13 from "../../../image/photo slider/slider13.jpg";
import Slide14 from "../../../image/photo slider/slider14.jpg";
import Slide5 from "../../../image/photo slider/slider5.jpg";
import Slide6 from "../../../image/photo slider/slider6.jpg";
import Slide7 from "../../../image/photo slider/slider7.jpg";
import Slide8 from "../../../image/photo slider/slider8.jpg";
import Slide9 from "../../../image/photo slider/slider9.jpg";
import Slide10 from "../../../image/photo slider/slider10.jpg";
import Slide11 from "../../../image/photo slider/slider11.jpg";

import "./PageProduct.css";
import NavbarMain from "../../Navbar/NavbarMain";
import Footer from "../../Footer/Footer";

const PageProduct = () => {
  const products = [
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
  return (
    <div className=" Body">
      <div className="bg-white">
        <NavbarMain />
      </div>

      <div className="conntainer">
        <div className="row" style={{ margin: "50px",justifyContent:"center"}}>
          {products.map((item, index) => (
            <div key={index} className="col-6 col-lg-3 colStyle">
              <div className=" Cards">
                <div className="cardBody">
                  <div className="style">
                    <img src={item.src} />
                  </div>
                  <h5 class="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-inherit">
        <Footer />
      </div>
    </div>
  );
};

export default PageProduct;
