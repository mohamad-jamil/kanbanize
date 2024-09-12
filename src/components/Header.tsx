import React, { useState } from "react";
import Button from "./Button";
import AddCardModal from "./AddCardModal";

interface CardProps {
  title: string;
  text: string;
  header: string;
  buttonLink?: string;
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
    <div className="text-bg-primary p-3">
      <h1>{headerText}</h1> <Button handleButtonClick={openModal}>+ Add</Button>{" "}
      {showModal && (
        <AddCardModal
          cards={cards}
          setCards={setCards}
          handleCloseModal={closeModal}
          modalTitle="Add New Card"
        ></AddCardModal>
      )}
    </div>
  );
}

export default Header;
