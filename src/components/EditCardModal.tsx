import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";

interface Props {
  columns: string[];
  title: string;
  text: string;
  status: string;
  handleCloseModal: () => void;
  id: string;
  onUpdateCard: (
    id: string,
    newTitle: string,
    newDescription: string,
    newStatus: string
  ) => void;
}

function EditCardModal({
  columns,
  title,
  text,
  status,
  handleCloseModal,
  id,
  onUpdateCard,
}: Props) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(text);
  const [newStatus, setNewStatus] = useState(status);
  const [showEmptyTitleError, setShowEmptyTitleError] = useState(false);

  const handleEditCard = () => {
    if (newTitle != "") {
      onUpdateCard(id, newTitle, newDescription, newStatus);
      handleCloseModal();
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
    setShowEmptyTitleError(e.target.value.trim() == "");
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewDescription(e.target.value);
  };

  const handleStatusChange = (status: string) => {
    setNewStatus(status);
  };

  return (
    <div
      className="modal fade show d-block"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-white text-dark">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {`Edit ${id}`}
            </h1>
            <Dropdown
              dropdownItems={columns}
              selectedItem={status}
              handleStatusChange={handleStatusChange}
            />
          </div>
          <div className="modal-body bg-white text-dark">
            {showEmptyTitleError && (
              <div className="alert alert-danger" role="alert">
                <b>Error!</b> "Title" field must be populated.
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={newTitle}
                className="form-control"
                placeholder="Summarise your card here."
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={3}
                value={newDescription}
                placeholder="Provide a description of your card here."
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer d-flex">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEditCard}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCardModal;
