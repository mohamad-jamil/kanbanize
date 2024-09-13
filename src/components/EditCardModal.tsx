import React from "react";
import { useState } from "react";

interface Props {
  title: string;
  text: string;
  handleCloseModal: () => void;
  header: string;
  setCards: React.Dispatch<
    React.SetStateAction<{ title: string; text: string; header: string }[]>
  >;
}

function EditCardModal({
  title,
  text,
  handleCloseModal,
  header,
  setCards,
}: Props) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showEmptyTitleError, setShowEmptyTitleError] = useState(false);

  const handleCreateCard = () => {
    if (newTitle != "") {
      setShowEmptyTitleError(false);

      //   setCards([
      //     ...cards,
      //     {
      //       title: newTitle,
      //       text: newDescription,
      //       header: `ID-${nextID}`,
      //     },
      //   ]);

      handleCloseModal();
    } else {
      setShowEmptyTitleError(true);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
    setShowEmptyTitleError(e.target.value == "");
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewDescription(e.target.value);
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
              Edit Card
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body bg-white text-dark">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
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
                placeholder="Provide a description of your card here."
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreateCard}
            >
              Save changes
            </button>
            {showEmptyTitleError && (
              <div className="alert alert-danger" role="alert">
                <b>Error!</b> "Title" field must be populated.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCardModal;
