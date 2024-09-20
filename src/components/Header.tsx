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
      <h1 className="ps-2">{headerText}</h1>{" "}
      <ul className="nav nav-underline ms-4">
        <li className="nav-item">
          <a
            className="nav-link active text-light"
            aria-current="page"
            href="#"
          >
            Boards
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>{" "}
      <Button handleButtonClick={openModal}>+ Add Card</Button>{" "}
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
