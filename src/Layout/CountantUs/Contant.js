import React from "react";
import NavbarMain from "../Navbar/NavbarMain";
import ICON1 from "../../image/photo slider/backgrund/icon/icons8-address-32.png";
import ICON2 from "../../image/photo slider/backgrund/icon/icons8-envelope-20.png";
import ICON3 from "../../image/photo slider/backgrund/icon/icons8-phone-20.png";
import ICON4 from "../../image/photo slider/backgrund/icon/icons8-telegram-20.png";
import ICON5 from "../../image/photo slider/backgrund/icon/icons8-tick-60.png"
import "./Contant.css";
import Footer from "../Footer/Footer";
const Contant = () => {
  const Count = [
    { id: 1, title: "تلفن", text: "09188808587", Src: ICON3 },
    { id: 2, title: "ایمیل", text: "info@gmail.com", Src: ICON2 },
    { id: 3, title: "آدرس", text: "همدان", Src: ICON1 },
    { id: 4, title: "فضای مجازی", text: "@hamedan", Src: ICON4 },
  ];
  return (
    <>
    
      <NavbarMain />
      <div className="Countainerrrs">
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            className="row bg-hero"
            style={{
              justifyContent: "space-around",
              // alignItems: "center",
              width: "900px",
              height: "450px",
            }}
          >
            <h3
              className="font-iransans"
              style={{
                paddingTop: "2rem",
                paddingRight: "2rem",
                fontWeight: "bolder",
                position: "relative",
              }}
            >
              راه های ارتباطی
             <span style={{position:"absolute",top:"0.8rem"}}><img src={ICON5}/></span>
            </h3>

            <div className="row">
              {Count.map((item, index) => (
                <div
                  key={index}
                  className="col-6 col-lg-3 COL"
                  style={{ height: "120px", marginTop: "12px" }}
                >
                  <div className="card">
                    <div className="card-body">
                      <img className="StyleIcon" src={item.Src} />

                      <h4
                        className="font-iransans"
                        style={{ paddingTop: "1.5rem" }}
                      >
                        {item.title}
                      </h4>
                      <h6 className="font-iransans">{item.text}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      <Footer />
      </>
  );
};

export default Contant;
