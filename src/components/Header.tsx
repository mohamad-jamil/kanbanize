import React, { useState } from "react";
import Button from "./Button";
import AddCardModal from "./AddCardModal";
import ProjectIdentifier from "./ProjectIdentifier";

interface CardProps {
  title: string;
  description: string;
  id: string;
  status: string;
}

interface Props {
  cards: CardProps[];
  addCard: (title: string, description: string) => void;
  setProjectCode: React.Dispatch<React.SetStateAction<string>>;
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

function Header({ cards, addCard, setProjectCode, setCards }: Props) {
  const headerText = "Kanbanize";
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="text-bg-primary d-flex align-items-center">
      <h1 className="p-2 ps-4">{headerText}</h1>
      <div className="d-flex align-items-center position-absolute end-0 me-5">
        <Button handleButtonClick={openModal}>+ Add Card</Button>
      </div>
      <div className="ms-5">
        <ProjectIdentifier
          setProjectCode={setProjectCode}
          cards={cards}
          setCards={setCards}
        />
      </div>
      {showModal && (
        <AddCardModal
          cards={cards}
          addCard={addCard}
          handleCloseModal={closeModal}
        ></AddCardModal>
      )}
    </div>
  );
}

export default Header;
