import React, { useState } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import st from "./styles.module.scss";
import cn from "classnames";
import Switcher from "../ui/Switcher/Switcher";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import CloseImg from "../../assets/images/ui/close.svg";
const Auth = () => {
  const [isLoginSection, setIsLoginSection] = useState(false);
  const navigate = useNavigate();

  const handleSwitcherChange = () => {
    navigate("/gallery");
    setIsLoginSection((prev) => !prev);
  };

  return (
    <div className={st.auth}>
      <button type="button" className={cn(st.btn, st.btn_close)}>
        <ReactSVG
          src={CloseImg}
          className={st["svg-box"]}
          width={18}
          height={18}
        />
      </button>
      <div className={st.auth__inner}>
        <Switcher handleChange={handleSwitcherChange} />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Auth;
