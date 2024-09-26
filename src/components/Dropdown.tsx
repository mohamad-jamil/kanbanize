import { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  dropdownItems: string[];
  selectedItem: string;
  handleStatusChange: (status: string) => void;
}

function Dropdown({ dropdownItems, selectedItem, handleStatusChange }: Props) {
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [currentItem, setCurrentItem] = useState(selectedItem);

  const toggleDropdownExpanded = () => {
    setDropdownExpanded(!dropdownExpanded);
  };

  const handleChangeStatus = (e: MouseEvent, item: string) => {
    toggleDropdownExpanded();
    setCurrentItem(item);
    handleStatusChange(item);
  };

  return (
    <div className="btn-group" style={{ position: "relative" }}>
      <button
        className="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        onClick={toggleDropdownExpanded}
      >
        {currentItem}
      </button>
      <ul
        className={`dropdown-menu ${dropdownExpanded ? "show" : ""}`}
        style={{ top: "100%", left: 0 }}
      >
        {dropdownItems.map((item, index) => (
          <li key={index} onClick={(e) => handleChangeStatus(e, item)}>
            <a className="dropdown-item">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
