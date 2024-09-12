import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

interface CardProps {
  title: string;
  text: string;
  header: string;
  buttonLink?: string;
}

function App() {
  const [cards, setCards] = useState<CardProps[]>([]);

  return (
    <>
      <Header cards={cards} setCards={setCards}></Header>
      <Card cards={cards}></Card>
    </>
  );
}

export default App;
