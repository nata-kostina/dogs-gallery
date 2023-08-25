import React from "react";
import st from "./styles.module.scss";
import WindImg from "../../assets/images/ui/banner/wind.png";
import Star1 from "../../assets/images/ui/banner/star-1.svg";
import Star2 from "../../assets/images/ui/banner/star-2.svg";
import Star4 from "../../assets/images/ui/banner/star-4.svg";
import Star5 from "../../assets/images/ui/banner/star-5.svg";
import Star6 from "../../assets/images/ui/banner/star-6.svg";
import Star7 from "../../assets/images/ui/banner/star-7.svg";
import Star8 from "../../assets/images/ui/banner/star-8.svg";
import Flower from "../../assets/images/ui/banner/flower-1.svg";

const Banner = () => {
  return (
    <section className={st.section}>
      <div className={st.banner}>
        <div className={st.banner__content}>
          <span className={st.banner__text}>Make first 5 image for free</span>
          <button className={st.banner__btn}>Upgrade</button>
        </div>
        <div className={st.banner__animation}>
          <img
            src={WindImg}
            className={st.wind}
            height={198}
            width={198}
            alt="wind"
          />
          <img src={Star1} className={st["star-1"]} alt="star-1" />
          <img src={Star2} className={st["star-2"]} alt="star-2" />
          <img src={Star4} className={st["star-4"]} alt="star-4" />
          <img src={Star5} className={st["star-5"]} alt="star-5" />
          <img src={Star6} className={st["star-6"]} alt="star-6" />
          <img src={Star7} className={st["star-7"]} alt="star-7" />
          <img src={Star8} className={st["star-8"]} alt="star-8" />
          <img src={Flower} className={st["flower"]} alt="flower" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
