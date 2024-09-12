import React, { useState } from "react";
import Button from "./Button";
import AddCardModal from "./AddCardModal";

function Header() {
  const headerText = "Kanbanize";
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="text-bg-primary p-3">
      <h1>{headerText}</h1> <Button handleButtonClick={openModal}>+ Add</Button>{" "}
      {showModal && (
        <AddCardModal
          handleCloseModal={closeModal}
          modalTitle="Add New Card"
        ></AddCardModal>
      )}
    </div>
  );
}

export default Header;
