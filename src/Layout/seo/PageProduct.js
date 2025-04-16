import React from "react";

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

import "./PageProduct.css";
import NavbarMain from "../Navbar/NavbarMain";
import Footer from "../Footer/Footer";
import ModalPhone from "../../container/Modal/ModalPhone";
import { Box, Typography } from "@mui/material";

const Seo = () => {
  const products = [
    { id: 1, src: Slide15, title: "انواع سیمان" },
    { id: 1, src: Slide14, title: "انواع سیمان" },
    { id: 2, src: Slide1, title: "هبلکس(بلوک aac)" },
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
    { id: 15, src: Slide15, title: "سیمان هگمتان" },
    { id: 16, src: Slide15, title: "سیمان همدان" },
    { id: 17, src: Slide15, title: "سیمان هگمتان" },
    { id: 18, src: Slide15, title: "سیمان همدان" },
    { id: 19, src: Slide15, title: "سیمان هگمتان" },
    { id: 20, src: Slide15, title: "سیمان همدان" },
    { id: 21, src: Slide15, title: "سیمان هگمتان" },
    { id: 22, src: Slide15, title: "سیمان همدان" },
    { id: 23, src: Slide15, title: "سیمان هگمتان" },
    { id: 24, src: Slide15, title: "سیمان همدان" },
    { id: 25, src: Slide15, title: "سیمان هگمتان" },
    { id: 26, src: Slide15, title: "سیمان همدان" },
    { id: 27, src: Slide15, title: "سیمان هگمتان" },
    { id: 28, src: Slide15, title: "سیمان همدان" },
    { id: 29, src: Slide15, title: "سیمان هگمتان" },
    { id: 30, src: Slide15, title: "سیمان همدان" },
    { id: 31, src: Slide15, title: "سیمان هگمتان" },
    { id: 32, src: Slide15, title: "سیمان همدان" },
    { id: 33, src: Slide15, title: "سیمان هگمتان" },
    { id: 34, src: Slide15, title: "سیمان همدان" },
    { id: 35, src: Slide15, title: "سیمان هگمتان" },
    { id: 36, src: Slide15, title: "سیمان همدان" },
    { id: 37, src: Slide15, title: "سیمان هگمتان" },
    { id: 38, src: Slide15, title: "سیمان همدان" },
    { id: 39, src: Slide15, title: "سیمان هگمتان" },
    { id: 40, src: Slide15, title: "سیمان همدان" },
    { id: 41, src: Slide15, title: "سیمان هگمتان" },
    { id: 42, src: Slide15, title: "سیمان همدان" },
    { id: 43, src: Slide15, title: "سیمان هگمتان" },
    { id: 44, src: Slide15, title: "سیمان همدان" },
    { id: 45, src: Slide15, title: "سیمان هگمتان" },
    { id: 46, src: Slide15, title: "سیمان همدان" },
    { id: 47, src: Slide15, title: "سیمان هگمتان" },
    { id: 46, src: Slide15, title: "سیمان همدان" },
    { id: 47, src: Slide15, title: "سیمان هگمتان" },
    { id: 48, src: Slide15, title: "سیمان همدان" },
    { id: 49, src: Slide15, title: "سیمان هگمتان" },
    { id: 50, src: Slide15, title: "سیمان همدان" },
    { id: 51, src: Slide15, title: "سیمان هگمتان" },
    { id: 52, src: Slide15, title: "سیمان همدان" },
    { id: 53, src: Slide15, title: "سیمان هگمتان" },
    { id: 54, src: Slide15, title: "سیمان همدان" },
    { id: 55, src: Slide15, title: "سیمان هگمتان" },
    { id: 56, src: Slide15, title: "سیمان همدان" },
    { id: 57, src: Slide15, title: "سیمان هگمتان" },
    { id: 58, src: Slide15, title: "سیمان همدان" },
    { id: 59, src: Slide15, title: "سیمان هگمتان" },
    { id: 60, src: Slide15, title: "سیمان همدان" },
    { id: 61, src: Slide15, title: "سیمان هگمتان" },
    { id: 62, src: Slide15, title: "سیمان همدان" },
    { id: 63, src: Slide15, title: "سیمان هگمتان" },
    { id: 64, src: Slide15, title: "سیمان همدان" },
    { id: 65, src: Slide15, title: "سیمان هگمتان" },
    { id: 66, src: Slide15, title: "سیمان همدان" },
    { id: 67, src: Slide15, title: "سیمان هگمتان" },
    { id: 68, src: Slide15, title: "سیمان همدان" },
    { id: 69, src: Slide15, title: "سیمان هگمتان" },
    { id: 70, src: Slide15, title: "سیمان همدان" },
    { id: 71, src: Slide15, title: "سیمان هگمتان" },
    { id: 72, src: Slide15, title: "سیمان همدان" },
    { id: 73, src: Slide15, title: "سیمان هگمتان" },
    { id: 74, src: Slide15, title: "سیمان همدان" },
    { id: 75, src: Slide15, title: "سیمان هگمتان" },
    { id: 76, src: Slide15, title: "سیمان همدان" },
    { id: 77, src: Slide15, title: "سیمان هگمتان" },
    { id: 78, src: Slide15, title: "سیمان همدان" },
    { id: 79, src: Slide15, title: "سیمان هگمتان" },
    { id: 80, src: Slide15, title: "سیمان همدان" },
    { id: 81, src: Slide15, title: "سیمان هگمتان" },
    { id: 82, src: Slide15, title: "سیمان همدان" },
    { id: 83, src: Slide15, title: "سیمان هگمتان" },
    { id: 84, src: Slide15, title: "سیمان همدان" },
    { id: 85, src: Slide15, title: "سیمان هگمتان" },
    { id: 86, src: Slide15, title: "سیمان همدان" },
    { id: 87, src: Slide15, title: "سیمان هگمتان" },
    { id: 88, src: Slide15, title: "سیمان همدان" },
    { id: 89, src: Slide15, title: "سیمان هگمتان" },
    { id: 90, src: Slide15, title: "سیمان همدان" },
    { id: 91, src: Slide15, title: "سیمان هگمتان" },
    { id: 92, src: Slide15, title: "سیمان همدان" },
    { id: 93, src: Slide15, title: "سیمان هگمتان" },
    { id: 94, src: Slide15, title: "سیمان همدان" },
    { id: 95, src: Slide15, title: "سیمان هگمتان" },
    { id: 96, src: Slide15, title: "سیمان همدان" },
    { id: 97, src: Slide15, title: "سیمان هگمتان" },
    { id: 98, src: Slide15, title: "سیمان همدان" },
    { id: 99, src: Slide15, title: "سیمان هگمتان" },
    { id: 100, src: Slide15, title: "سیمان همدان" },
    { id: 101, src: Slide15, title: "سیمان هگمتان" },
    { id: 102, src: Slide15, title: "سیمان همدان" },
    { id: 103, src: Slide15, title: "سیمان هگمتان" },
    { id: 104, src: Slide15, title: "سیمان همدان" },
    { id: 105, src: Slide15, title: "سیمان هگمتان" },
    { id: 106, src: Slide15, title: "سیمان همدان" },
    { id: 107, src: Slide15, title: "سیمان هگمتان" },
    { id: 108, src: Slide15, title: "سیمان همدان" },
    { id: 109, src: Slide15, title: "سیمان هگمتان" },
    { id: 110, src: Slide15, title: "سیمان همدان" },
    { id: 111, src: Slide15, title: "سیمان هگمتان" },
    { id: 112, src: Slide15, title: "سیمان همدان" },
    { id: 113, src: Slide15, title: "سیمان هگمتان" },
    { id: 114, src: Slide15, title: "سیمان همدان" },
    { id: 115, src: Slide15, title: "سیمان هگمتان" },
    { id: 116, src: Slide15, title: "سیمان همدان" },
    { id: 117, src: Slide15, title: "سیمان هگمتان" },
    { id: 118, src: Slide15, title: "سیمان همدان" },
    { id: 119, src: Slide15, title: "سیمان هگمتان" },
    { id: 120, src: Slide15, title: "سیمان همدان" },
    { id: 121, src: Slide15, title: "سیمان هگمتان" },
    { id: 122, src: Slide15, title: "سیمان همدان" },
    { id: 123, src: Slide15, title: "سیمان هگمتان" },
    { id: 124, src: Slide15, title: "سیمان همدان" },
    { id: 125, src: Slide15, title: "سیمان هگمتان" },
    { id: 126, src: Slide15, title: "سیمان همدان" },
    { id: 127, src: Slide15, title: "سیمان هگمتان" },
    { id: 128, src: Slide15, title: "سیمان همدان" },
    { id: 129, src: Slide15, title: "سیمان هگمتان" },
    { id: 130, src: Slide15, title: "سیمان همدان" },
    { id: 131, src: Slide15, title: "سیمان هگمتان" },
    { id: 132, src: Slide15, title: "سیمان همدان" },
    { id: 133, src: Slide15, title: "سیمان هگمتان" },
    { id: 134, src: Slide15, title: "سیمان همدان" },
    { id: 135, src: Slide15, title: "سیمان هگمتان" },
    { id: 136, src: Slide15, title: "سیمان همدان" },
    { id: 137, src: Slide15, title: "سیمان هگمتان" },
    { id: 138, src: Slide15, title: "سیمان همدان" },
    { id: 139, src: Slide15, title: "سیمان هگمتان" },
    { id: 140, src: Slide15, title: "سیمان همدان" },
    { id: 141, src: Slide15, title: "سیمان هگمتان" },
    { id: 142, src: Slide15, title: "سیمان همدان" },
  ];
  return (
    <div className=" Body">
      <span className="stylePhone">
        <ModalPhone />
      </span>

      <div className="conntainer POSNav">
        <div className="bg-white NAV" style={{ height: "70px" }}>
          <NavbarMain />
        </div>
        <div
          style={{
            justifyContent: "center",
            width: "100%",
            display: 'flex',
            gap: 70,
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingTop: 100,
            paddingBottom: 60
          }}
        >
          {products.map((item, index) => (
            <Box key={item.id} sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 250,
              width: 200,
              borderRadius: 5,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.3)',
            }}>
              <img
                alt={'خرید' + item.title} src={item.src} style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  zIndex: 10
                }} />
              <Box sx={{
                display: 'flex',
                width: '80%',
                height: 40,
                position: 'absolute',
                bottom: -50,
                // zIndex: 1,
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
                boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.2)',
                justifyContent: 'center',
                alignItems: 'center'

              }}>
                <Typography style={{ color: '#111', fontFamily: "IRANSans" }}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      {products.map((item, index) => (
        <Typography variant="h6" key={item.id}>
          {item.title}
        </Typography>
      ))}
      {products.map((item, index) => (
        <Typography variant="h5" key={item.id}>
          {item.title}
        </Typography>
      ))}
      {products.map((item, index) => (
        <Typography variant="h4" key={item.id}>
          {item.title}
        </Typography>
      ))}
      {products.map((item, index) => (
        <Typography variant="h3" key={item.id}>
          {item.title}
        </Typography>
      ))}
      {products.map((item, index) => (
        <Typography variant="h2" key={item.id}>
          {item.title}
        </Typography>
      ))}
      {products.map((item, index) => (
        <Typography variant="h1" key={item.id}>
          {item.title}
        </Typography>
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Seo;
