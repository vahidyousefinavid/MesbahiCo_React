import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./../../image/Logo.svg";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import LOGO from "../../image/photo slider/backgrund/icon/icons8-left-24.png";

const NavbarMain = () => {
  return (
    <div>
      <div className="Container" style={{ position: "relative" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-6 col-lg-10 DISCOL">
            <Navbar
              expand="lg"
              className=" font-iransans"
              style={{ display: "inline" }}
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-around sm:z-0"
              >
                <div className=" styleLang col-lg-2 text-center">
                  <span
                    className="font-iransans"
                    style={{ fontWeight: "bold", fontSize: "20px",color:"#f6cd00" }}
                  >
                    بازرگانی مصباحی
                  </span>
                </div>
                <div className="col-lg-8">
                  <Nav className="me-auto justify-center styleNAv">
                    <Nav.Link
                      href="/"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                      }}
                    >
                      <span
                        className="LogoLeft"
                        style={{ position: "absolute", right: "-1.5rem" }}
                      >
                        <img src={LOGO} alt="left" />
                      </span>
                      خانه
                    </Nav.Link>

                    <Nav.Link
                      href="#link"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                      }}
                    >
                      <Link to="/PageProduct">
                        <span
                          className="LogoLeft"
                          style={{ position: "absolute", right: "-1.5rem" }}
                        >
                          <img src={LOGO} alt="left" />
                        </span>
                        لیست محصولات
                      </Link>
                    </Nav.Link>

                    <Nav.Link
                      href="/Contant"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                      }}
                    >
                      <span
                        className="LogoLeft"
                        style={{ position: "absolute", right: "-1.5rem" }}
                      >
                        <img src={LOGO} alt="left" />
                      </span>
                      ارتباط با ما
                    </Nav.Link>

                    <Nav.Link
                      href="#link"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                      }}
                    >
                      <Link to="/About">
                        <span
                          className="LogoLeft"
                          style={{ position: "absolute", right: "-1.5rem" }}
                        >
                          <img src={LOGO} alt="left" />
                        </span>
                        درباره ما
                      </Link>
                    </Nav.Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="col-6 col-lg-1" style={{ alignSelf: "center" }}>
            <span>
              <img className=" styleImg" src={Logo} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
