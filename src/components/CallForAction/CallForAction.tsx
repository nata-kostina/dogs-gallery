import React, { useRef } from "react";
import st from "./styles.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { addImages } from "../../store/slices/appSlice";

const CallForAction = () => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const imageUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const imageUrl = URL.createObjectURL(files[i]);
        imageUrls.push(imageUrl);
      }
      dispatch(addImages(imageUrls));
    }
  };
  return (
    <div className={st["call-for-action"]}>
      <button className={st.btn} onClick={handleButtonClick}>
        Make magic
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className={st.input}
      />
    </div>
  );
};

export default CallForAction;
