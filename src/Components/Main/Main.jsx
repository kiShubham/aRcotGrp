import React from "react";
import style from "./Main.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <div className={style.main}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Main;
