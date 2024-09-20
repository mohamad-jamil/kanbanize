import React, { useState } from "react";
import Button from "./Button";
import AddCardModal from "./AddCardModal";

interface CardProps {
  title: string;
  description: string;
  id: string;
  status: string;
}

interface Props {
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

function Header({ cards, setCards }: Props) {
  const headerText = "Kanbanize";
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="text-bg-primary d-flex align-items-center">
      <h1 className="p-2 ps-4">{headerText}</h1>
      <div className="d-flex align-items-center position-absolute end-0 me-4">
        <Button handleButtonClick={openModal}>+ Add Card</Button>
      </div>
      {showModal && (
        <AddCardModal
          cards={cards}
          setCards={setCards}
          handleCloseModal={closeModal}
        ></AddCardModal>
      )}
    </div>
  );
}

export default Header;
