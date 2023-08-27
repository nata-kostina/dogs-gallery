import React, { useCallback, useContext } from "react";
import { GsapContext } from "../../../contexts/GsapContext";
import st from "./styles.module.scss";
import cn from "classnames";
interface Props {
  selectedKey: string | null;
  options: string[];
  handleOptionSelect: (key: string) => void;
}

const DropDownMenu = ({ selectedKey, options, handleOptionSelect }: Props) => {
  const ctx = useContext(GsapContext);
  const onSelect = useCallback(
    (key: string) => {
      if (ctx && ctx.remove) {
        ctx.remove();
      }
      handleOptionSelect(key);
    },
    [ctx]
  );
  return (
    <div className={st["dropdown-menu"]}>
      {options.map((item) => (
        <div
          key={item}
          className={cn(st.dropdown__item, {
            [st.dropdown__item_active]: item === selectedKey,
          })}
          onClick={() => onSelect(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
