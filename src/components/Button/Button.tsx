import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  handleButtonClick: () => void;
}

function Button({ children, handleButtonClick }: Props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark btn-sm button"
        onClick={handleButtonClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
