import React from "react";

function Icon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        style={style}
        fill="#000"
        d="M49.26 28.41H14.74a4.84 4.84 0 00-4.84 4.84v14.92A4.84 4.84 0 0014.74 53h34.52a4.84 4.84 0 004.84-4.83V33.25a4.84 4.84 0 00-4.84-4.84zm2.84 19.76A2.84 2.84 0 0149.26 51H14.74a2.84 2.84 0 01-2.84-2.83V33.25a2.84 2.84 0 012.84-2.84h34.52a2.84 2.84 0 012.84 2.84v14.92zM14.94 25.51a1 1 0 001-1 2.91 2.91 0 013-2.73H45a2.91 2.91 0 013.05 2.73 1 1 0 002 0A4.91 4.91 0 0045 19.78H19a4.91 4.91 0 00-5 4.73 1 1 0 00.94 1zM20.58 16.72a1 1 0 001-1 2.89 2.89 0 013-2.72h14.8a2.89 2.89 0 013 2.72 1 1 0 002 0 4.89 4.89 0 00-5-4.72H24.62a4.89 4.89 0 00-5 4.72 1 1 0 00.96 1z"
      ></path>
    </svg>
  );
}

export default Icon;