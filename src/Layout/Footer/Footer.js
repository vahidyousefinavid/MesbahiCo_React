import React from "react";
import "./Footer.css";
import ICON1 from "../../image/photo slider/backgrund/icon/icons8-address-32.png";
import ICON2 from "../../image/photo slider/backgrund/icon/icons8-envelope-20.png";
import ICON3 from "../../image/photo slider/backgrund/icon/icons8-phone-20.png";
import ICON4 from "../../image/photo slider/backgrund/icon/icons8-telegram-20.png";
import ICON5 from "../../image/photo slider/backgrund/icon/icons8-tick-30.png";
import { Box } from "@mui/material";
import Rubika from "../../image/rubikapng.parspng.com_.png";
import Tell from "../../image/icons8-telegram.svg";
import Eitaa from "../../image/05.png";
const Footer = () => {
  const Count = [
    { id: 1, title: "تلفن", text: "09188808587", text2: "08132647099", Src: ICON3,alt:'تماس با بازرگانی مصباحی' },
    { id: 2, title: "ایمیل", text: "civilmodernsakht@gmail.com", Src: ICON2,alt:'تماس با بازرگانی مصباحی' },
    { id: 3, title: "آدرس", text: "همدان", Src: ICON1,alt:' آدرس بازرگانی مصباحی' },
    {
      id: 4,
      title: " فضای مجازی",
      text: "Moh@mm@d",
      Src: ICON4,
      tel: Tell,
      eitaa: Eitaa,
      rub: Rubika,
      alt:'تماس با بازرگانی مصباحی'
    },
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
        <span style={{ position: "absolute", top: "-0.4rem" }}>
          <img alt="بازرگانی مصالح ساختمانی مصباحی" src={ICON5} />
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
              <img alt={item.alt} src={item.Src} />
              <h4> {item.title}</h4>
              <h5>{item.text}</h5>
              <h5 style={{ marginTop: "5px" }}>{item.text2}</h5>
            </div>
            {item.id === 4 &&
              <Box sx={{ marginTop: 1, display: 'flex', gap: 1, position: 'absolute', bottom: 8 ,right:'25%'}}>
                <a
                  // style={{ display: "block" }}
                  href="https://web.rubika.ir/#im?um=mesbahi99"
                >
                  <img alt="بازرگانی مصالح ساختمانی مصباحی در روبیکا" src={item.rub} style={{ display: "inline-block", width: "30px", height: "30px" }} />
                </a>
                <a
                  // style={{ display: "block" }}
                  href="https://web.eitaa.com/#/im?p=@mesbahi99"
                >
                  <img alt="بازرگانی مصالح ساختمانی مصباحی در ایتا" style={{ display: "inline-block", width: "30px", height: "30px" }} src={item.eitaa} width="40px" height="40px" />
                </a>
                <a
                  // style={{ display: "block" }}
                  href="https://t.me/+989188808587"
                >
                  <img alt="بازرگانی مصالح ساختمانی مصباحی در تلگرام" style={{ display: "inline-block", width: "30px", height: "30px" }} src={item.tel} />
                </a>
              </Box>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
