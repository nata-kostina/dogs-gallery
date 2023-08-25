import React, { useState } from "react";
import Socials from "./Socials/Socials";
import st from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { setUser } from "../../../store/slices/userSlice";
import { ReactSVG } from "react-svg";
import EyeImg from "../../../assets/images/ui/eye.svg";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setUser({ email, name }));
    navigate("/gallery");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className={st["form-container"]}>
      <Socials />
      <form
        name="signUp-form"
        className={st["signUp-form"]}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={st["input-group"]}>
          <label htmlFor="signUp-name" className={st.label}>
            What’s your name?*
          </label>
          <div className={st["input-box"]}>
            <input
              type="text"
              placeholder="Ivan"
              name="name"
              id={"signUp-name"}
              className={st.input}
              required
              onChange={handleNameChange}
            />
            <ReactSVG src={EyeImg} className={st["svg-box"]} />
          </div>
        </div>
        <div className={st["input-group"]}>
          <label htmlFor="signUp-email" className={st.label}>
            Your Email*
          </label>
          <div className={st["input-box"]}>
            <input
              type="email"
              placeholder="ivanivanov@gmail.ru"
              name="email"
              id={"signUp-email"}
              className={st.input}
              required
              onChange={handleEmailChange}
            />
            <ReactSVG src={EyeImg} className={st["svg-box"]} />
          </div>
        </div>
        <button className={st.btn} type="button" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
