import React from "react";

interface Props {
  fill?: string;
}

const HeartButton = React.forwardRef<SVGPathElement, Props>(
  ({ fill }: Props, ref) => {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill={`${fill || "none"}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "initial" }}
      >
        <path
          ref={ref}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8542 5.70833C20.1562 5.70833 22.375 8.8125 22.375 11.7083C22.375 17.5729 13.1667 22.375 13 22.375C12.8333 22.375 3.625 17.5729 3.625 11.7083C3.625 8.8125 5.84375 5.70833 9.14583 5.70833C11.0417 5.70833 12.2812 6.65625 13 7.48958C13.7187 6.65625 14.9583 5.70833 16.8542 5.70833Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    );
  }
);

export default HeartButton;
