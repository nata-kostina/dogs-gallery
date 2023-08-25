import React from "react";
import { RouterPaths } from "../../router/router";
import { Link, NavLink } from "react-router-dom";
import st from "./styles.module.scss";
import cn from "classnames";
import UserImg from "../../assets/images/user/user.png";
import BurgerImg from "../../assets/images/ui/burger.svg";
import { useAppSelector } from "./../../store/hooks";

const Navigation = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return (
    <nav className={st.navigation}>
      <ul className={st["navigation-list"]}>
        {RouterPaths.map((path) => {
          return (
            <li key={path.link} className={cn(st["navigation-item"])}>
              <NavLink
                className={({ isActive }) => {
                  let classes = `${st["navigation-link"]}`;
                  if (isActive) {
                    classes += ` ${st["navigation-link_active"]}`;
                  }
                  return classes;
                }}
                to={path.link}
              >
                {path.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {isAuthenticated ? (
        <Link
          className={cn(st["navigation-link"], st["navigation-link_user-auth"])}
          to={"/user"}
        >
          <div className={st["navigation-link_user-img-box"]}>
            <img
              src={UserImg}
              alt="user"
              className={st["navigation-link_user-img"]}
            />
          </div>
        </Link>
      ) : (
        <button className={st["navigation-link_user-not-auth"]}>Log in</button>
      )}

      <div className={st["burger-menu"]}>
        <img
          src={BurgerImg}
          alt="navigation"
          className={st["burger-menu-img"]}
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};

export default Navigation;
