import React from "react";
import StarImg from "../../assets/images/hero/star.png";
import st from "./styles.module.scss";
import cn from "classnames";

const Hero = () => {
  return (
    <div className={st.hero}>
      <div className={st.content}>
        <span className={st.content__text}>
          Try out{" "}
          <span className={cn(st.content__text, st.content__text_accent)}>
            AI’s features
          </span>
        </span>
        <img
          className={st.content__img}
          src={StarImg}
          height={498}
          alt="star"
        />
      </div>
    </div>
  );
};

export default Hero;
