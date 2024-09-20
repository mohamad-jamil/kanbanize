import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  handleButtonClick: () => void;
}

function Button({ children, handleButtonClick }: Props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light btn-sm"
        onClick={handleButtonClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
