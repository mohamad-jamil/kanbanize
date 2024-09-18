import React, { useState } from "react";
import EditCardModal from "./EditCardModal";

interface Props {
  title: string;
  text: string;
  header: string;
}

function Card({ title, text, header }: Props) {
  let link: string | undefined = undefined;

  const [showModal, setShowModal] = useState(false);
  const showEditModal = () => setShowModal(true);
  const hideEditModal = () => setShowModal(false);

  const setCards = () => console.log("Updating cards...");

  return (
    <div className="container d-flex justify-content-center">
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
          <a href={link} className="btn btn-primary" onClick={showEditModal}>
            Edit
          </a>
          {showModal && (
            <EditCardModal
              title={title}
              text={text}
              handleCloseModal={hideEditModal}
              header={header}
              setCards={setCards}
            ></EditCardModal>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
