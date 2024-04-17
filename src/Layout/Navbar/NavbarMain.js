import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./../../image/photo slider/backgrund/icon/aks.png";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import LOGO from "../../image/photo slider/backgrund/icon/icons8-left-24.png";
import { Box } from "@mui/material";

const NavbarMain = () => {
  return (
    <div style={{
      position: 'fixed',
      zIndex: 1000,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0px 10px 25px 0px rgba(0, 0, 0, 0.2)',
    }}>
      <div className="Container DISCOL"
        style={{
          position: "relative",
          paddingBottom: 6,
        }}>
        <div
          className="row"
          style={{ justifyContent: "space-between", position: "relative", alignItems: "center" }}
        >
          <div className="col-sm-8 col-lg-9 ">
            <Navbar
              expand="lg"
              className=" font-iransans"
              style={{ display: "inline" }}
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ margin: "20px", backgroundColor: "#fbda39", outline: "none" }}
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-around sm:z-0 BackNav"
              >
                <div className=" styleLang col-lg-3 text-center">
                  <span
                    className="font-iransans"
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#f6cd00",
                    }}
                  >
                    بازرگانی مصباحی
                  </span>
                </div>
                <div >
                  <Nav
                    className="me-auto justify-center styleNAv"
                    style={{ display: "flex" }}
                  >
                    <Nav.Link
                      href="/"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                        marginBottom: "12px",

                      }}

                    >
                      <span
                        className="LogoLeft"
                        style={{ position: "absolute", right: "-1.5rem" }}
                      >
                        <img src={LOGO} alt="بازرگانی مصباحی" />
                      </span>
                      خانه
                    </Nav.Link>

                    <Nav.Link
                      href="#link"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                        marginBottom: "12px"
                      }}
                    >
                      <Link to="/PageProduct">
                        <span
                          className="LogoLeft"
                          style={{ position: "absolute", right: "-1.5rem" }}
                        >
                          <img src={LOGO} alt="بازرگانی مصباحی" />
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
                        marginBottom: "12px"
                      }}
                    >
                      <span
                        className="LogoLeft"
                        style={{ position: "absolute", right: "-1.5rem" }}
                      >
                        <img src={LOGO} alt="بازرگانی مصباحی" />
                      </span>
                      ارتباط با ما
                    </Nav.Link>

                    <Nav.Link
                      href="#link"
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        position: "relative",
                        marginBottom: "12px"
                      }}
                    >
                      <Link to="/About" >
                        <span
                          className="LogoLeft"
                          style={{ position: "absolute", right: "-1.5rem" }}
                        >
                          <img src={LOGO} alt="بازرگانی مصباحی" />
                        </span>
                        درباره ما
                      </Link>
                    </Nav.Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="col-sm-3 col-lg-2">
            <span className=" StyRES">
              <Box
                sx={{ display: 'flex', width: 110 }}>
                <img style={{ width: '100%' }} className=" styleImg" src={Logo} alt="بازرگانی مصباحی" />
              </Box>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
