import Header from "./components/Header";
import Card from "./components/Card";
import Column from "./components/Column";

import { useState } from "react";

interface CardProps {
  title: string;
  text: string;
  header: string;
  buttonLink?: string;
}

function App() {
  const [columns, setColumns] = useState([
    "Backlog",
    "To Do",
    "In Progress",
    "Done",
  ]);
  const [cards, setCards] = useState<CardProps[]>([]);

  return (
    <>
      <Header cards={cards} setCards={setCards}></Header>
      <div className="container-fluid">
        <div className="row">
          {columns.map((columnTitle, index) => (
            <div className="col">
              <Column
                key={index}
                cards={cards}
                columnTitle={columnTitle}
              ></Column>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
