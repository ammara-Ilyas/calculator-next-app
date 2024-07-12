import React from "react";

const Button = ({ value, onClick, className = "" }) => (
  <button
    className={`bg-gray-200 text-2xl px-4 py-2 duration-150 hover:bg-gray-300  border-[1px] border-black rounded ${className}`}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

export default Button;
