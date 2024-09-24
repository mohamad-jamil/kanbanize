import Header from "./components/Header";
import Column from "./components/Column";

import { useState } from "react";
import "./App.css";

interface CardProps {
  title: string;
  description: string;
  id: string;
  status: string;
}

function App() {
  const [columns, setColumns] = useState([
    "Backlog",
    "To Do",
    "In Progress",
    "Done",
  ]);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [projectCode, setProjectCode] = useState("ID");

  const addCard = (title: string, description: string) => {
    const maxID = parseInt(
      cards
        .reduce((maxItem, currentItem) => {
          const maxIdNum = parseInt(
            maxItem.id.replace(`${projectCode}-`, ""),
            10
          );
          const currentIdNum = parseInt(
            currentItem.id.replace(`${projectCode}-`, ""),
            10
          );

          return currentIdNum > maxIdNum ? currentItem : maxItem;
        })
        .id.replace(`${projectCode}-`, ""),
      10
    );

    const nextID = (maxID + 1).toString().padStart(4, "0");
    const newCard = {
      title: title,
      description: description,
      id: `${projectCode}-${nextID}`,
      status: "Backlog",
    };
    setCards([...cards, newCard]);
  };

  const updateCard = (id: string, newTitle: string, newDescription: string) => {
    const updatedCards = cards.map((card) =>
      card.id === id
        ? { ...card, title: newTitle, description: newDescription }
        : card
    );
    setCards(updatedCards);
  };

  const deleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <>
      <Header
        cards={cards}
        addCard={addCard}
        projectCode={projectCode}
        setProjectCode={setProjectCode}
        setCards={setCards}
      ></Header>
      <div className="container-fluid full-height-85">
        <div className="row h-100 justify-content-center">
          {columns.map((columnTitle, index) => (
            <div
              key={index}
              className="col col-2 mx-5 mt-4 bg-light bg-gradient"
            >
              <Column
                cards={cards}
                columnTitle={columnTitle}
                onDeleteCard={deleteCard}
                onUpdateCard={updateCard}
              ></Column>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
