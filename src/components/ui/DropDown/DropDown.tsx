import React, { useCallback, useEffect, useRef, useState } from "react";
import st from "./styles.module.scss";
import cn from "classnames";
import ArrowImg from "../../../assets/images/ui/arrow.svg";
import { ReactSVG } from "react-svg";
import Modal from "../../Modal/Modal";
import SettingsImg from "../../../assets/images/ui/settings.svg";
import DropDownMenu from "./DropDownMenu";
import variables from "./../../../styles/_variables.scss";

interface Props {
  options: string[];
}

const Dropdown = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(options[0]);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [menuPosition, setMenuPosition] = useState<Record<string, string>>({});
  const handleOptionSelect = (key: string) => {
    setSelectedKey(key);
  };
  const openDropDown = () => {
    if (dropDownRef.current) {
      calculateModalPosition();
    }
    setIsOpen(true);
  };
  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, []);
  const calculateModalPosition = useCallback(() => {
    if (dropDownRef.current) {
      if (Number.parseInt(variables.bpMedium) >= window.innerWidth) {
        setMenuPosition({
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
        });
      } else {
        const { left, top } = dropDownRef.current.getBoundingClientRect();
        setMenuPosition({
          top: top + "px",
          left: left + "px",
        });
      }
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", calculateModalPosition);
    return () => {
      window.removeEventListener("resize", calculateModalPosition);
    };
  }, []);
  return (
    <>
      <div className={st.dropdown} ref={dropDownRef}>
        <button className={cn(st.btn, st.btn_full)} onClick={openDropDown}>
          <span className={st.btn__text}>
            {selectedKey
              ? options.find((item) => item === selectedKey)
              : options[0]}
          </span>
          <ReactSVG src={ArrowImg} className={st["svg-box"]} />
        </button>
        <button
          type="button"
          className={cn(st.btn, st.btn_reduced)}
          onClick={openDropDown}
        >
          <img src={SettingsImg} alt="settings" className={st["btn-img"]} />
        </button>
        {isOpen && (
          <Modal
            onClose={closeDropDown}
            overlayStyles={{ zIndex: 4000 }}
            modalStyles={{ ...menuPosition }}
          >
            <DropDownMenu
              selectedKey={selectedKey}
              options={options}
              handleOptionSelect={handleOptionSelect}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Dropdown;
