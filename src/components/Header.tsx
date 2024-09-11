import React from "react";
import AddButton from "./AddButton";

function Header() {
  const headerText = "Kanbanize";
  return (
    <div className="text-bg-primary p-3">
      <h1>{headerText}</h1> <AddButton />
    </div>
  );
}

export default Header;
