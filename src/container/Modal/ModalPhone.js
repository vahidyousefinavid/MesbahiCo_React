import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./ModalPhone.css";
import Phone from "../../image/icons8-phone-40.svg";
import { Link } from "react-router-dom";
import Screen from "../screenWindow/Screen";

const ModalPhone = () => {
  const { height, width } = Screen();

  return (
    <div>
      {width >= 900 ? (
        <Link to={"/Contant"}>
          <Button className="PossBtn">
            <img src={Phone} alt="خرید مصالح ساختمانی" />
          </Button>
        </Link>
      ) : (
        <Button className="PossBtn">
          <a href={"tel:+989188808587"}>
            <img src={Phone} alt="خرید مصالح ساختمانی"/>
          </a>
        </Button>
      )}
    </div>
  );
};

export default ModalPhone;
