import Header from "./components/Header";
import Column from "./components/Column";

import { useState } from "react";

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

  const addCard = (title: string, description: string) => {
    const nextID = (cards.length + 1).toString().padStart(4, "0");
    const newCard = {
      title: title,
      description: description,
      id: `ID-${nextID}`,
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
      <Header cards={cards} setCards={setCards}></Header>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {columns.map((columnTitle, index) => (
            <div className="col col-2 mx-5 mt-4 bg-light bg-gradient">
              <Column
                key={index}
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
