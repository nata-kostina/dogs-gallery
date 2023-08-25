import React from "react";
import st from "./styles.module.scss";

interface Props {
  handleChange: () => void;
}

const Switcher = ({ handleChange }: Props) => {
  return (
    <span className={st.switcher}>
      <input
        type="checkbox"
        id="switcher"
        className={st.switcher__input}
        onChange={handleChange}
      />
      <label htmlFor="switcher" className={st.switcher__label}></label>
    </span>
  );
};

export default Switcher;
