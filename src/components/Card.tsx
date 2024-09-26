import React, { useState } from "react";
import EditCardModal from "./EditCardModal";
import DeleteCardModal from "./DeleteCardModal";

interface Props {
  columns: string[];
  title: string;
  text: string;
  id: string;
  status: string;
  onDeleteCard: (id: string) => void;
  onUpdateCard: (id: string, newTitle: string, newDescription: string) => void;
}

function Card({
  columns,
  title,
  text,
  id,
  status,
  onDeleteCard,
  onUpdateCard,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const showEditModal = () => setShowModal(true);
  const hideEditModal = () => setShowModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          {id}
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
          <a className="btn btn-primary" onClick={showEditModal}>
            Edit
          </a>
          {showModal && (
            <EditCardModal
              columns={columns}
              title={title}
              text={text}
              status={status}
              handleCloseModal={hideEditModal}
              id={id}
              onUpdateCard={onUpdateCard}
            ></EditCardModal>
          )}
          <a className="btn btn-danger ms-2" onClick={toggleDeleteModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </a>
          {showDeleteModal && (
            <DeleteCardModal
              id={id}
              onDeleteCard={onDeleteCard}
              toggleDeleteModal={toggleDeleteModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
