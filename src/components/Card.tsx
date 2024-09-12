import React from "react";

interface CardProps {
  title: string;
  text: string;
  header: string;
  buttonLink?: string;
}

interface Props {
  cards: CardProps[];
}

function Card({ cards }: Props) {
  let link: string | undefined = undefined;

  return (
    <div className="container p-4">
      {cards.map((item, index) => (
        <div
          key={index}
          className="card text-bg-dark mb-3"
          style={{ width: "18rem" }}
        >
          <div className="card-header">{item.header}</div>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <a href={link} className="btn btn-primary">
              Edit
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
