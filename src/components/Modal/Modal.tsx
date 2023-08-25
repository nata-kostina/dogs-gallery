import React, { useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";
import st from "./styles.module.scss";
import { gsap } from "gsap";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const Modal = ({ isOpen, onClose, children, styles }: Props) => {
  const modalRoot = document.getElementById("modal-root");
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
  });
  if (!isOpen) return null;
  return (
    <>
      {modalRoot
        ? ReactDOM.createPortal(
            <>
              <div
                ref={overlayRef}
                className={st.overlay}
                onClick={onClose}
                style={{ ...styles }}
              ></div>
              <div className={st.modal} ref={contentRef}>
                {children}
              </div>
            </>,
            modalRoot
          )
        : null}
    </>
  );
};

export default Modal;
