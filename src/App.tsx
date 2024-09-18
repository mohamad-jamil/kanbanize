import Header from "./components/Header";
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
        <div className="row justify-content-center">
          {columns.map((columnTitle, index) => (
            <div className="col col-2 mx-5 mt-4 bg-light bg-gradient">
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
