import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
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
