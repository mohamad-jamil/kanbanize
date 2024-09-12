import { useState } from "react";

interface Props {
  handleCloseModal: () => void;
  modalTitle: string;
}

function AddCardModal({ handleCloseModal, modalTitle }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateCard = () => {
    console.log(
      `Saving card with title "${title}" and description "${description}".`
    );
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    console.log(e.target.value);
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
              {modalTitle}
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
              <label className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="PROJ-104"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Provide a summary of your card here."
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={3}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreateCard}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCardModal;
