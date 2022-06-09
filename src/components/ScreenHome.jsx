import React from "react";
import "../components/screenHome.css";
import Imginfo from "../assets/img-info.jpg";
import { Parallax } from "react-parallax";
import ScrollDown from "./scrollDown";

const ScreenHome = () => {
  return (
    <div id="home" className="divHome">
      <Parallax bgImage={Imginfo} className="custom-img" strength={300}>
        <div className="conteneur"></div>
        <ScrollDown />
      </Parallax>
    </div>
  );
};

export default ScreenHome;
