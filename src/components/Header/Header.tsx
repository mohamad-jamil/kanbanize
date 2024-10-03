import React, { useState } from "react";
import Button from "../Button/Button";
import AddCardModal from "../AddCardModal/AddCardModal";
import ProjectIdentifier from "../ProjectIdentifier/ProjectIdentifier";
import { maxID } from "../../helpers/maxID";

interface CardProps {
  title: string;
  description: string;
  id: string;
  status: string;
}

interface Props {
  cards: CardProps[];
  addCard: (title: string, description: string) => void;
  projectCode: string;
  setProjectCode: React.Dispatch<React.SetStateAction<string>>;
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

function Header({
  cards,
  addCard,
  projectCode,
  setProjectCode,
  setCards,
}: Props) {
  const headerText = "Kanbanize";
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addSampleCards = () => {
    const statuses = ["Backlog", "To Do", "In Progress", "Done"];
    const nextID = (maxID(cards, projectCode) + 1).toString().padStart(4, "0");
    const sampleCard = {
      title: "Test title",
      description: "Test description",
      id: `${projectCode}-${nextID}`,
      status: statuses[Math.floor(Math.random() * 4)],
    };
    setCards(cards.concat(sampleCard));
  };

  return (
    <div className="d-flex align-items-center">
      <h1 className="p-2 ps-4">{headerText}</h1>
      <div className="d-flex align-items-center position-absolute end-0 me-5">
        <div className="me-2">
          <Button handleButtonClick={addSampleCards}>
            [TEST] Add Sample Card
          </Button>
        </div>
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
          projectCode={projectCode}
        ></AddCardModal>
      )}
    </div>
  );
}

export default Header;
