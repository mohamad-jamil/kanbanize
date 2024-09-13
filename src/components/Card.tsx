import React from "react";

interface Props {
  title: string;
  text: string;
  header: string;
}

function Card({ title, text, header }: Props) {
  let link: string | undefined = undefined;

  return (
    <div className="container p-4">
      <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          {header}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grip-horizontal"
            viewBox="0 0 16 16"
          >
            <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
