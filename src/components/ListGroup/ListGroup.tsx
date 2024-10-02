import { useState } from "react";

function ListGroup() {
  let items = ["London", "Paris", "New York", "Munich", "Istanbul"];
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          className={
            index === selectedIndex
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
