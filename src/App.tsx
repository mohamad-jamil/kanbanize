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
  const [cards, setCards] = useState([
    {
      title: "Fix bug",
      text: "Work on a task to fix this bug.",
      header: "ID-0001",
    },
    {
      title: "Add feature",
      text: "Add this new feature to improve the app.",
      header: "ID-0002",
    },
    {
      title: "Create pull request",
      text: "Create a PR with your changes and add necessary approvers.",
      header: "ID-0003",
    },
  ]);

  return (
    <>
      <Header cards={cards} setCards={setCards}></Header>
      <Card cards={cards}></Card>
    </>
  );
}

export default App;
