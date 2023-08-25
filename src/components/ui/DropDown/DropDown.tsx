import React, { useLayoutEffect, useRef, useState } from "react";
import st from "./styles.module.scss";
import cn from "classnames";
import ArrowImg from "../../../assets/images/ui/arrow.svg";
import { ReactSVG } from "react-svg";
import Modal from "../../Modal/Modal";
import SettingsImg from "../../../assets/images/ui/settings.svg";
import { gsap } from "gsap";

interface Props {
  options: string[];
}

const Dropdown = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(options[0]);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleOptionSelect = (key: string) => {
    setSelectedKey(key);
    setIsOpen(false);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    gsap.fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
  });

  return (
    <>
      <div className={st.dropdown}>
        <button
          className={cn(st.btn, st.btn_full)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={st.btn__text}>
            {selectedKey
              ? options.find((item) => item === selectedKey)
              : options[0]}
          </span>
          <ReactSVG src={ArrowImg} className={st["svg-box"]} />
        </button>

        {isOpen && (
          <div className={st["dropdown-menu"]} ref={menuRef}>
            {options.map((item) => (
              <div
                key={item}
                className={cn(st.dropdown__item, {
                  [st.dropdown__item_active]: item === selectedKey,
                })}
                onClick={() => handleOptionSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <Modal
          isOpen={isOpen}
          onClose={closeDropDown}
          styles={{ zIndex: 4000 }}
        ></Modal>
      </div>
      <button
        type="button"
        className={cn(st.btn, st.btn_reduced)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={SettingsImg} alt="settings" className={st["btn-img"]} />
      </button>
    </>
  );
};

export default Dropdown;
