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
        className="btn btn-outline-light position-absolute top-0 end-0 mt-3 me-3"
        onClick={handleButtonClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
