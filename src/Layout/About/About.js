import React, { useState } from "react";
import "./About.css";
import NavbarMain from "../Navbar/NavbarMain";
import SliderAbout from "./SliderAbout/SliderAbout";
import Footer from "../Footer/Footer";
import Phone from '../../image/icons8-phone.svg'
import ModalPhone from "../../container/Modal/ModalPhone";
const About = () => {
  return (
    <div>
      <span className='stylePhone'><ModalPhone/></span>
      <div className=" StlyeAll">
        <div className="StyleNav">
          <NavbarMain />
        </div>
        <div className="ImageHero">
          <h1 className="font-iransans">تاریچه صنعت سیمان</h1>
        </div>
        <div className="mt-5">
          <p>
            سیمان یا سمنت واژه‌ایست که از لغت سمنتوم رومی گرفته شده و قدمت آن به
            پیش از میلاد می‌رسد. مصرف آن در ساختمان پانتئون شهر رم واقع در
            ایتالیا که مربوط به ۲۷ سال قبل از میلاد است، دیده شده‌است. در
            ساختمان گنبد این بنا که ۴۳ متر قطر دارد، مخلوطی از خرده‌سنگ و آهک
            پخته به کار رفته‌است. ولی کشف سیمان به شکل امروز مربوط است به یک نفر
            بنای انگلیسی بنام ژوزف اسپدین که از پختن آهک و خاک رس در حرارت بالا
            و آسیاب کردن آن موفق شد ابتدایی‌ترین نوع سیمان را کشف نموده و آن را
            در تاریخ ۲۱ اکتبر ۱۸۲۴ به نام خود در انگلستان ثبت نماید و نام محصول
            به دست آمده را سیمان پرتلند گذاشت. علت این نامگذاری همان‌طور که گفته
            شد آن است که سیمان از سمنتوم رومی گرفته شده‌است و پرتلند نام
            جزیره‌ایست در انگلستان که رنگ سیمان پس از سخت شدن به رنگ سنگ‌های
            ساحلی این جزیره در می‌آید، به همین دلیل نام پرتلند را به دنبال سیمان
            برای آن انتخاب نموده‌اند. البته قبل از ژوزف اسپدین، اشخاص دیگری در
            فرانسه و انگلستان از پختن خاک رس و سنگ آهک مصالح مشابهی به دست
            آوردند ولی هیچ‌کدام کار خود را دنبال نکرده و محصول خود را به ثبت
            نرساندند، ژوزف اسپدین نخستین شخصی بود که سیمان را در اوایل قرن
            نوزدهم در انگلستان به ثبت رسانده و آن را ابتدا برای ساخت فانوس
            دریایی مورد استفاده قرار داد.
          </p>
        </div>

        <div className="Contaner">
          <SliderAbout />
        </div>
        <div style={{width:"100%"}}>
          <Footer /> 
        </div>
      </div>
    </div>
  );
};

export default About;
