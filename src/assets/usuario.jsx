import React from "react";

function Icon({fill, handleIconClick}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      onClick={handleIconClick}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-138 -4102)">
          <g transform="translate(100 4044)">
            <g transform="translate(34 54)">
              <path d="M0 0L24 0 24 24 0 24z"></path>
              <path
                fill={fill}
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;