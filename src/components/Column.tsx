import React from "react";
import Card from "./Card";

interface Props {
  cards: { title: string; text: string; header: string }[];
  columnTitle: string;
}

function Column({ cards, columnTitle }: Props) {
  return (
    <>
      <h4>{columnTitle}</h4>
      <ul className="list-group list-group-flush w-25 d-flex align-items-center">
        <div>
          {cards.map((item, index) => (
            <li className="list-group-item">
              <Card
                key={index}
                title={item.title}
                text={item.text}
                header={item.header}
              ></Card>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}

export default Column;
