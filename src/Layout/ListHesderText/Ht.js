import React from "react";
import Tick from "./../../image/icons8-tick.svg";
import One from './../../image/number-1_1.svg'
import Two from './../../image/number-2_1.svg'
import Three from './../../image/number-3_1.svg'
import Four from '../../image/number-4-svgrepo-com.svg'
import './Ht.css'
const Hlist = [
  {
    id: 1,
    title: "تهیه مصالح با نازلترین قیمت",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند ",
    src: Tick,
    SVG:One
  },
  {
    id: 2,
    title: "فروش کلی و جزئی",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، ",
    src: Tick,
    SVG:Two
  },
  {
    id: 3,
    title: "مصالح روز و با کیفیت",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، ",
    src: Tick,
    SVG:Three
  },
  {
    id: 4,
    title: "افزایش سرعت ساخت",
    type: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، ",
    src: Tick,
    SVG:Four
  },
];
const Ht = () => {
  return (
    <div className="Container" style={{marginTop:"5rem"}}>
      <div className="row justify-center font-iransans">
        {Hlist.map((item, index) => (
          <div key={index} className="col-sm-12 col-lg-3 mb-4 mt-6">
            <div className="row styleRow">
              <div className="col-2">
                <div>
                  <img className="mb-2 styleTick  p-1 rounded-full" style={{borderRadius:"50px",border:"2px solid #f5cd00"}} src={item.src} />
                  <img className="StyleSvg"  src={item.SVG}/>
                </div>
              </div>
              <div className="col-8 styleParag" style={{width:"80%"}}>
                <div> 
                  <h1 className="text-xl font-extrabold" style={{color:"#000",marginBottom:"12px",fontSize:"16px"}}>{item.title}</h1>
                  <p style={{color:"#7b7777",textAlign:"justify",fontWeight:"bold",fontSize:"12px"}}>{item.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ht;
