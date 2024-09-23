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
    const nextID = (cards.length + 1).toString().padStart(4, "0");
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

  return (
    <>
      <Header
        cards={cards}
        addCard={addCard}
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
