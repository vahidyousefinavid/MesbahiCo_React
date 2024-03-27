import React from "react";
import { Route,Routes, useRoutes } from 'react-router'
import Container from "./container/Container";
import SlodeProd from "./Layout/Caruosel/SlideProd/SlodeProd";
import SlideProd2 from "./Layout/Caruosel/SlideProd/SlideProd2/SlideProd2";
import SlodeProd3 from "./Layout/Caruosel/SlideProd3/SlodeProd3";
import SlideProd4 from "./Layout/Caruosel/SlideProde4/SlideProd4";
import About from "./Layout/About/About";
import PageProduct from "./Layout/ListHero/PageProduct/PageProduct";
import Contant from "./Layout/CountantUs/Contant";



const App = () => {
 
  const routs = useRoutes([
    {path:'/' ,element:<Container/>},
    {path:'/SlideProd' , element:<SlodeProd/>},
    {path:'/SlideProd2' , element:<SlideProd2/>},
    {path:'/SlodeProd3' , element:<SlodeProd3/>},
    {path:'/SlideProd4' , element:<SlideProd4/>},
    {path:'/About' , element:<About/>},
    {path:'/PageProduct' , element:<PageProduct/>},
    {path:'/Contant' , element:<Contant/>},
  ])
 
 return routs
 
};

export default App;
