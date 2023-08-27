import React, { useLayoutEffect, useRef, useState } from "react";
import st from "./styles.module.scss";
import { gsap } from "gsap";
import { GsapContext } from "../../contexts/GsapContext";

interface Props {
  onClose: () => void;
  children?: React.ReactNode;
  overlayStyles?: React.CSSProperties;
  modalStyles?: React.CSSProperties;
}

const Modal = ({ onClose, children, overlayStyles, modalStyles }: Props) => {
  const [active, setActive] = useState(false);
  const [ctx] = useState(() => gsap.context(() => {}));

  const modalRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    ctx.add(() => {
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

    ctx.add("remove", () => {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.7,
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.7,
        onComplete: () => {
          setActive(false);
          onClose();
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={modalRef} style={{ position: "absolute" }}>
        <div
          ref={overlayRef}
          className={st.overlay}
          onClick={() => ctx.remove()}
          style={{ ...overlayStyles }}
        ></div>
        <div className={st.modal} ref={contentRef} style={{ ...modalStyles }}>
          <GsapContext.Provider value={ctx}>{children}</GsapContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Modal;
