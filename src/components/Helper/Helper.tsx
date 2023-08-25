import React from "react";
import st from "./styles.module.scss";

const Helper = () => {
  return (
    <div className={st.helper}>
      <div className={st.helper__inner}>
        <h3 className={st.helper__title}>There is nothing in your album :(</h3>
        <div className={st.helper__content}>
          What are you waiting for? Upload your drawings soon and see the magic!
        </div>
        <div className={st.arrow}></div>
      </div>
    </div>
  );
};

export default Helper;
