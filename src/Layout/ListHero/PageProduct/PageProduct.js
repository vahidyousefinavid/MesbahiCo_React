import React from "react";

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
import ModalPhone from "../../../container/Modal/ModalPhone";
import { Box, Typography } from "@mui/material";

const PageProduct = () => {
  const products = [
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
            paddingBottom:60
          }}
        >
          {products.map((item, index) => (
            <Box sx={{
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
              <img src={item.src} style={{
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
                backgroundImage:'linear-gradient(to right, hsla(39,100%,68%,1) 0%, #c77f1a 51%, #eba51b 100%)',
                textTransform: 'uppercase',
                transition: '0.5s',
                cursor:'pointer',
                backgroundSize: '200% auto',
                color: 'white',
                borderRadius: '6px',
                '&:hover': {
                    backgroundPosition: 'right center', 
                    color: '#fff',
                    textDecoration: 'none',
                },
                boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.2)',
                justifyContent:'center',
                alignItems:'center'

              }}>
                <Typography style={{ color: '#111', fontFamily: "IRANSans" }}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PageProduct;
