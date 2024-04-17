import React from "react";
import "./ListH.css";
import Home1 from "../../image/photo slider/ceman.jpg";
import Home2 from "../../image/photo slider/slider1.jpg";
import Home3 from "../../image/photo slider/cash.jpg";
import { Link } from "react-router-dom";
const Itemlist = [
  {
    id: 1,
    title: "سیمان",
    type: "در حال حاضر شرکت سیمان هگمتان با تولید ۷۰۰۰ تن در روز به عنوان یکی از بزرگترین تولید کنندگان سیمان کشور توانسته است",
    src: Home1,
    dir: "rtl",
    width: "50%",
    textAlign: "justify",
    alt:'خرید و فروش انواع سیمان'
  },
  {
    id: 2,
    title: "هبلکس",
    type: "بلوک هبلکس از جمله مصالح ساختمانی است که از جنس ترکیبی سیمان، آهک، پودر آلومینیوم و سیلیس ساخته شده است",
    src: Home2,
    dir: "ltr",
    width: "80%",
    textAlign: "end",
    alt:'خرید و فروش  هبلکس'
  },
  {
    id: 3,
    title: "استعلام قیمت",
    type: "قبل از خرید از مجموعه ما میتوانید قیمت ها را مقایسه کنید.",
    src: Home3,
    dir: "rtl",
    width: "90%",
    height: "20rem",
    textAlign: "justify",
    alt:'خرید و فروش  سیمان'
  },
];

const ListH = () => {
  return (
    <>
      <div className="Containers" style={{ marginTop: "5rem" }}>
        <div className="row StyleHeader items-center mb-12">
          <div className="col-6" style={{ textAlign: "start" }}>
            <div className="styleProd">
              <h1 className="font-iransans font-bold text-4xl">
                <Link to="/PageProduct">محصولات ما</Link>
              </h1>
            </div>
          </div>
          <div className="col-6" style={{ textAlign: "-webkit-left" }}>
            <div>
              <img alt="خرید و فروش مصالح ساختمانی" src={require("../../image/icons8-target-50.png")} />
            </div>
          </div>
        </div>
        <div className="row">
          {Itemlist.map((item, index) => (
            <div key={index} className="col-sm-12">
              <div
                className="row styleMargin mb-28 justify-between sm: mx-auto"
                style={{ direction: `${item.dir}` }}
              >
                <div
                  className="col-sm-6 col-lg-3"
                  style={{ position: "relative" }}
                >
                  <div className="styleLine">
                    <h1
                      className="font-iransans"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: `${item.textAlign}`,
                      }}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="font-iransans"
                      style={{
                        color: "#7b7777",
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginTop: "12px",
                        textAlign: `${item.textAlign}`,
                      }}
                    >
                      {item.type}
                    </p>
                    {/* <span
                      style={{
                        color: "#ec9146",
                        fontSize: "10px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      بیشتر بدانید
                    </span> */}
                  </div>
                </div>
                <div className="col-sm-12 col-lg-8">
                  <div className="styleDivImg" style={{ width: "100%" }}>
                    <img
                      className="styleImag"
                      style={{
                        width: `${item.width}`,
                        height: `${item.height}`,
                        borderRadius: "9px",
                      }}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListH;
