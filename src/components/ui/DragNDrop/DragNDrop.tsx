import React from "react";
import st from "./styles.module.scss";
import { ReactSVG } from "react-svg";
import CameraImg from "../../../assets/images/ui/camera.svg";

interface Props {
  handleDrop: (files: FileList) => void;
}

const DragNDrop = ({ handleDrop }: Props) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDrop(e.dataTransfer.files);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleDrop(e.target.files);
    }
  };

  return (
    <div className={st["drag-and-drop-box"]}>
      <div
        className={st["drop-area"]}
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
      >
        <label className={st.label}>
          <ReactSVG className={st["svg-box"]} src={CameraImg} />

          <span className={st.text}>Make magic</span>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            className={st.input}
          />
        </label>
      </div>
    </div>
  );
};

export default DragNDrop;
