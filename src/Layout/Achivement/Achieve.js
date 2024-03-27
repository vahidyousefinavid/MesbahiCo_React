import React from "react";
import { Link } from "react-router-dom";
import "./Achivement.css";

const jobs = [
  { id: 1, number: "25", title: "پروژه ها" },
  { id: 2, number: "250", title: "مشتری ها" },
  { id: 3, number: "105", title: "اعضا" },
  { id: 4, number: "126", title: "جوایز" },
];

const Achieve = () => {
  return (
    <div className="Countainer font-iransans">
      <div className="row h-full justify-evenly" style={{ margin: "0 15px" }}>
        <div className="col-sm-12 col-lg-2 self-center">
          <div className="styleRes">
            <div
              style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                opacity: "0.8",
                backgroundColor: "#f5cd00",
              }}
            ></div>

            {/* <h1
              style={{
                position: "absolute",
                top: "40%",
                right: "40%",
                fontSize: "60px",
                fontWeight: "bold",
                color: "#000",
                fontFamily:"iransans-num"
              }}
            >
              24
            </h1> */}
            <p
              style={{
                position: "absolute",
                top: "50%",
                right: "3rem",
                color: "#000",
                fontWeight: "bold",
                fontSize: "20px",
                width: "90%",
              }}
              className="styleModern"
            >
              مدرن ساخت
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <div className="StyleParag">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#000",
              }}
              className="font-iransans"
            >
              <span><img src={require("../../image/photo slider/icons8-question-64.png")}/></span>
             <Link to="/About"> درباره ما</Link>
            
            </h1>
            <p style={{ color: "#7b7777", fontWeight: "bold" }}>
            ما در این مجموعه توانسته ایم در طی سالیان گذشته با ارائه مصالح با
            کیفیت و مناسب به مشتریان خود،رضایت حداکثری را کسب نماییم. مفتخر
            هستیم که توانسته ایم برای آبادانی کشور عزیزمان، قدمی هرچند کوچک
            برداریم ودر حال حاضر نیز تامین کننده بسیاری از مصالح ساختمانی هستیم.
            لازم به ذکر است در کنار تامین مصالح، تامین سایر محصولات ساختمانی را
            نیز انجام می دهیم. و تمام تلاش ما بر این است که در این راستا خدمات
            بیشتری به هم استانی ها و هموطن های عزیز خود ارائه دهیم.
            </p>
          </div>
          {/* <div className="row mt-12 font-iransans">
            {jobs.map((item, index) => (
              <div key={index} className="col-3">
                <div className="relative">
                  <h1
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#f5cd00",
                      fontFamily: "iransans-num",
                    }}
                  >
                    {item.number}
                  </h1>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Achieve;
