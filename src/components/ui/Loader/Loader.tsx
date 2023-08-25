import React from "react";
import st from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.loader}>
        <div className={st.loader__animation}>
          <div className={st.circle} />
          <div className={st.circle} />
          <div className={st.circle} />
          <div className={st.shadow} />
          <div className={st.shadow} />
          <div className={st.shadow} />
        </div>
        <span className={st.loader__text}>Loading</span>
      </div>
    </div>
  );
};

export default Loader;
