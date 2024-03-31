import React from "react";
import Twitter from "../../image/icons8-telegram.svg";
import Facebook from "./../../image/eitaa.png";
import G from "../../image/icons8-gmail.svg";
import Insta from "../../image/rubikapng.parspng.com_.png";
import "./ImageHero.css";
import NavbarMain from "../Navbar/NavbarMain";
import Tooltip from '@mui/material/Tooltip';

const ImageHero = () => {
  return (
    <div >
      <div className="container StyleBg">
        <div className=" col-lg-12 styleText font-iransans">
          <h1 className="text-slate-100 font-bold text-3xl mb-3">
            بازرگانی سیمان و مصالح ساختمانی مصباحی
          </h1>
          <button className="bg-yellow-400 py-2 px-4 rounded-lg">
            کلیک کنید
          </button>
          <div
            className="row StyleFlow"
            style={{ position: "absolute", bottom: "14px", right: "1.5rem" }}
          >
            <Tooltip title="تلگرام" placement="top">

            <div className=" mb-3 styleLogo col-lg-3">
              <img
                width="  20px"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  padding: "2px",
                }}
                src={Twitter}
              />
            </div>
            </Tooltip>
            <Tooltip title="ایتا" placement="top">
            <div className=" mb-3 styleLogo col-lg-3">
              <img
                width="20px"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  padding: "2px",
                }}
                src={Facebook}
              />
            </div>
            </Tooltip>
            <Tooltip title="ایمیل" placement="top">
            <div className=" mb-3 styleLogo col-lg-3">
              <img
                width="20px"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  padding: "2px",
                }}
                src={G}
              />
            </div>
            </Tooltip>
            <Tooltip title="روبیکا"  placement="top">
            <div className=" mb-3 styleLogo col-lg-3">
              <img
                width="20px"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  padding: "3px",
                }}
                src={Insta}
              />
            </div>
            </Tooltip>
          </div>
          <div
            className=" font-iransans styleEmPh"
            style={{ position: "absolute", left: "15rem", bottom: "2rem" }}
          >
            {/* <span
              className="text-slate-50 font-iransans"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "12px",
              }}
            >
              ایمیل:info@aithome.com
            </span> */}
            <span
              className="font-iransans"
              style={{ color: "#000", fontWeight: "bold", fontSize: "18px" }}
            >
              تلفن :{" "}
              <b style={{ color: "#000", fontFamily: "iransans-num" }}>
                09188808587
              </b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
