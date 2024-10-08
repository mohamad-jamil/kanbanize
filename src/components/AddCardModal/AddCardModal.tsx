import { useState } from "react";
import { maxID } from "../../helpers/maxID";

interface CardProps {
  title: string;
  description: string;
  id: string;
  status: string;
}

interface Props {
  cards: CardProps[];
  handleCloseModal: () => void;
  addCard: (title: string, description: string) => void;
  projectCode: string;
}

function AddCardModal({
  cards,
  handleCloseModal,
  addCard,
  projectCode,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showEmptyTitleError, setShowEmptyTitleError] = useState(false);

  const nextID = (maxID(cards, projectCode) + 1).toString().padStart(4, "0");

  const handleCreateCard = () => {
    if (title != "") {
      addCard(title, description);
      handleCloseModal();
    } else {
      setShowEmptyTitleError(true);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setShowEmptyTitleError(e.target.value.trim() == "");
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
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
              Add New Card
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
              <label className="form-label">Card ID</label>
              <input
                type="text"
                className="form-control"
                placeholder={`${projectCode}-${nextID}`}
                disabled
              />
            </div>
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

export default AddCardModal;
