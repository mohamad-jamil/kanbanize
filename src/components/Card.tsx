import React from "react";

interface CardProps {
  title: string;
  text: string;
  header: string;
  buttonLink?: string;
}

let cards: CardProps[] = [
  {
    title: "Fix bug",
    text: "Work on a task to fix this bug.",
    header: "PROJ-101",
  },
  {
    title: "Add feature",
    text: "Add this new feature to improve the app.",
    header: "PROJ-102",
  },
  {
    title: "Create pull request",
    text: "Create a PR with your changes and add necessary approvers.",
    header: "PROJ-103",
  },
];

function Card() {
  let link: string | undefined = undefined;

  return (
    <div className="container bg-secondary p-4">
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
