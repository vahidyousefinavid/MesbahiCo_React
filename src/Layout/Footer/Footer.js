import React from "react";
import "./Footer.css";
import ICON1 from "../../image/photo slider/backgrund/icon/icons8-address-32.png";
import ICON2 from "../../image/photo slider/backgrund/icon/icons8-envelope-20.png";
import ICON3 from "../../image/photo slider/backgrund/icon/icons8-phone-20.png";
import ICON4 from "../../image/photo slider/backgrund/icon/icons8-telegram-20.png";
import ICON5 from "../../image/photo slider/backgrund/icon/icons8-tick-30.png";
const Footer = () => {
  const Count = [
    { id: 1, title: "تلفن", text: "09188808587",text2:"08132647099", Src: ICON3 },
    { id: 2, title: "ایمیل", text: "civilmodernsakht@gmail.com", Src: ICON2 },
    { id: 3, title: "آدرس", text: "همدان", Src: ICON1 },
    { id: 4, title: " فضای مجازی", text: "Moh@mm@d", Src: ICON4 },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="Conntaineer font-iransans"
      style={{
        marginTop: "60px",
        backgroundColor: "#2d2c33",
        color: "#fff",
        padding: "40px",
        height: "450px",
      }}
    >
      <h1 style={{ position: "relative" }}>
        راه های ارتباط با ما
        <span style={{ position: "absolute", top: "-0.4rem"}}>
          <img src={ICON5} />
        </span>
      </h1>

      <div
        className="row StlRow"
        style={{ justifyContent: "center", marginTop: "7rem" }}
      >
        {Count.map((item, index) => (
          <div key={index} className="col-sm-6  styleCol">
            <div className="cardStyle">
              <div className="regStyle"></div>
              <img src={item.Src} />
              <h4> {item.title}</h4>
              <h5>{item.text}</h5>
              <h5 style={{marginTop:"5px"}}>{item.text2}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
