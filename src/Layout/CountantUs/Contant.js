import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import ICON1 from "../../image/photo slider/backgrund/icon/icons8-address-32.png";
import ICON2 from "../../image/photo slider/backgrund/icon/icons8-envelope-20.png";
import ICON3 from "../../image/photo slider/backgrund/icon/icons8-phone-20.png";
import ICON4 from "../../image/photo slider/backgrund/icon/icons8-telegram-20.png";
import ICON5 from "../../image/photo slider/backgrund/icon/icons8-tick-30.png";
import "./Contant.css";
import Footer from "../Footer/Footer";
import { Box, Typography } from "@mui/material";
const Contant = () => {
  const Count = [
    { id: 1, title: "تلفن", text: "09188808587", text2: "08132647099", src: ICON3 },
    { id: 2, title: "ایمیل", text: "civilmodernsakht@gmail.com", src: ICON2 },
    { id: 3, title: "آدرس", text: "همدان", src: ICON1 },
    { id: 4, title: "فضای مجازی", text: "Moh@mm@d", src: ICON4 },
  ];
  return (
    <>

      <div className="Countainerrrs">
        <div className="PNav">
          <NavbarMain />
        </div>
        <div className="" style={{ justifyContent: "center" }}>
          <div
            className="row bg-hero"
            style={{
              justifyContent: "space-around",
              width: "100%",
              paddingLeft: "0"
            }}
          >
            <h3
              className="font-iransans"
              style={{
                marginTop: "5rem",
                paddingTop: "1rem",
                paddingRight: "2rem",
                // paddingLeft:"0",
                fontWeight: "bolder",
                position: "relative",
                color: "#111"
              }}
            >
              راه های ارتباطی
              <span style={{ position: "absolute", top: "0.8rem" }}>
                <img src={ICON5} />
              </span>
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 80,
              paddingTop: 80,
              paddingBottom: 80,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {Count.map((item, index) => (
                <Box sx={{
                  position: 'relative',
                  width: 250,
                  height: '180px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Box sx={{
                    display: 'flex',
                    width: '60px',
                    height: '60px',
                    background: '#fff',
                    position: 'absolute',
                    top: -21,
                    zIndex: 12,
                    borderRadius: 2,
                    boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <img src={item.src}
                      style={{
                        width: 40,
                        height: 40
                      }} />
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: 'rgb(45, 44, 51)',
                    borderRadius: '10px',
                    justifyContent: 'center',
                    boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    paddingTop: 4,
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0
                  }}>
                    <Typography style={{ color: '#D79D4B', fontFamily: "IRANSans", marginBottom: 10 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#fff', fontFamily: "IRANSans" }}>
                      {item.text}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#fff', fontFamily: "IRANSans",marginTop:3 }}>
                      {item.text2}
                    </Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    width: '80%',
                    height: '20px',
                    position: 'absolute',
                    bottom: -8,
                    background: 'rgb(45, 44, 51)',
                    borderRadius: 6,
                    boxShadow: '0 5px 15px #00000020'
                  }} />
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contant;
