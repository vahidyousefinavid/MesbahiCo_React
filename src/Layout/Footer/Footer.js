import React from "react";
import "./Footer.css";
import ICON1 from "../../image/photo slider/backgrund/icon/icons8-address-32.png";
import ICON2 from "../../image/photo slider/backgrund/icon/icons8-envelope-20.png";
import ICON3 from "../../image/photo slider/backgrund/icon/icons8-phone-20.png";
import ICON4 from "../../image/photo slider/backgrund/icon/icons8-telegram-20.png";
import ICON5 from "../../image/photo slider/backgrund/icon/icons8-tick-60.png"
const Footer = () => {
  const Count = [
    { id: 1, title: "تلفن", text: "09188808587", Src: ICON3 },
    { id: 2, title: "ایمیل", text: "info@gmail.com", Src: ICON2 },
    { id: 3, title: "آدرس", text: "همدان", Src: ICON1 },
    { id: 4, title: " فضای مجازی", text: "@hamedan", Src: ICON4 },
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
        height:"450px"
      }}
    >
      <h1 style={{position:"relative"}}>راه های ارتباط با ما
       <span style={{position:"absolute",top:"-1.5rem"}}><img src={ICON5}/></span>
      </h1>

      <div className="row StlRow" style={{ justifyContent: "center",marginTop:"7rem" }}>
        {Count.map((item, index) => (
          <div key={index} className="col-6  styleCol">
            <div className="cardStyle">
              <div className="regStyle"></div>
              <img src={item.Src} />
              <h4> {item.title}</h4>
              <h5>{item.text}</h5>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row" style={{ position: "relative" }}>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              خبرنامه
            </h1>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
            <input type="text" placeholder="آدرس ایمیل..." />
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              لینک های سریع
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد اول
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد دوم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد سوم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مورد چهارم
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              شرکت
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              درباره ما
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              تیم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مشاغل
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              دفاتر
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div>
            <h6 style={{ width: "6rem", marginBottom: "15px" }}>
              <img style={{ color: "#fff" }} src={Logo} />
            </h6>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
           <span style={{fontFamily:'iransans-num'}}>شماره تلفن : 09188808587</span>
            <div
              className="row StyleObject"
              style={{ position: "absolute", bottom: "-3rem",left:"3rem" }}
            >
              <div className="col-3 col-lg-3" >
                <div>
                  <img src={Twitter} />
                </div>
              </div>
              <div className="col-3 col-lg-3">
                <div
                
                >
                  <img src={Insta} />
                </div>
              </div>

              <div className="col-3 col-lg-3">
                <div
                
                >
                  <img src={G} />
                </div>
              </div>

              <div className="col-3 col-lg-3">
                <div 

                  >
                  <img src={Face} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
