import Header from "./components/Header/Header";
import Column from "./components/Column/Column";

import { useState } from "react";
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import "./App.css";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
    const maxID = () => {
      let maxID = cards.length
        ? parseInt(
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
          )
        : 0;

      return maxID;
    };

    const nextID = (maxID() + 1).toString().padStart(4, "0");
    const newCard = {
      title: title,
      description: description,
      id: `${projectCode}-${nextID}`,
      status: "Backlog",
    };
    setCards([...cards, newCard]);
  };

  const updateCard = (
    id: string,
    newTitle: string,
    newDescription: string,
    newStatus: string
  ) => {
    const updatedCards = cards.map((card) =>
      card.id === id
        ? {
            ...card,
            title: newTitle,
            description: newDescription,
            status: newStatus,
          }
        : card
    );
    setCards(updatedCards);
  };

  const deleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const getTaskPosition = (id: string) =>
    cards.findIndex((card) => card.id === id);

  const handleDragOver = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeCard = cards.find((card) => card.id === String(active.id));
    const overCard = cards.find((card) => card.id === String(over.id));

    if (!activeCard || !overCard) return;

    // Determine if the card is moving to a different column
    const newColumn = overCard ? overCard.status : over.id; // Get new column from the dropped over card or placeholder
    if (activeCard.status !== newColumn) {
      // Move the card to the new column
      setCards((cards) =>
        cards.map((card) =>
          card.id === active.id ? { ...card, status: newColumn } : card
        )
      );
    } else {
      // Reorder within the same column
      const filteredCards = cards.filter(
        (card) => card.status === activeCard.status
      );
      const originalPos = filteredCards.findIndex(
        (card) => card.id === active.id
      );
      const newPos = filteredCards.findIndex((card) => card.id === over.id);

      setCards((cards) => {
        const columnCards = cards.filter(
          (card) => card.status === activeCard.status
        );
        const otherCards = cards.filter(
          (card) => card.status !== activeCard.status
        );
        const reorderedCards = arrayMove(columnCards, originalPos, newPos);
        return [...otherCards, ...reorderedCards];
      });
    }

    // setCards((cards) => {
    //   const originalPos = getTaskPosition(String(active.id));
    //   const newPos = getTaskPosition(String(over.id));

    //   return arrayMove(cards, originalPos, newPos);
    // });
  };

  return (
    <>
      <div className="header">
        <Header
          cards={cards}
          addCard={addCard}
          projectCode={projectCode}
          setProjectCode={setProjectCode}
          setCards={setCards}
        ></Header>
      </div>
      <div className="container-fluid full-height main-page">
        <DndContext
          onDragOver={handleDragOver}
          collisionDetection={closestCorners}
        >
          <div className="row h-100 justify-content-center">
            {columns.map((columnTitle, index) => (
              <div key={index} className="col col-2 mx-3 mt-4 column">
                <Column
                  columns={columns}
                  cards={cards}
                  columnTitle={columnTitle}
                  onDeleteCard={deleteCard}
                  onUpdateCard={updateCard}
                ></Column>
              </div>
            ))}
          </div>
        </DndContext>
      </div>
    </>
  );
}

export default App;
