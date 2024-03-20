import React, { useEffect, useState } from "react";
import { fetchMockData } from "../../api/api";
import style from "./Hero.module.css";
import Graphh from "../Graph/Graphh";
import data from "../../data.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Hero = () => {
  const [mockData, setMockData] = useState([]);
  // as of now we are not using mockData state, using data.json directly ;
  //just representing how to utilize it;

  const generateMockData = async () => {
    const fetchData = await fetchMockData();
    setMockData(fetchData);
  };

  useEffect(() => {
    generateMockData();
  }, []);

  const openYouTubeVideo = () => {
    window.open(
      "https://www.veed.io/view/aa5736d0-85e3-499e-a0f7-9b84b8e34316?panel=share&sharingWidget=true",
      "_blank"
    );
  };

  return (
    <div className={style.hero}>
      <Header />
      <div className={style.heroContent}>
        <div className={style.heading}>
          <p>The internet is</p>
          <p>your canvas</p>
        </div>
        <div className={style.subtext}>
          Gallons is where teams design and visualize their data.
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn}>start for free today</button>
        </div>
        <div className={style.graph_Section}>
          <button className={style.videoBtn} onClick={openYouTubeVideo}>
            video
            <div className={style.lightEffect}></div>
          </button>
          {/* <Graphh data={Mockdata} /> */}
          <Graphh data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
