import { Analytics } from "@vercel/analytics/react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Card from "./Card";

interface Props {
  columns: string[];
  cards: {
    title: string;
    description: string;
    id: string;
    status: string;
  }[];
  columnTitle: string;
  onDeleteCard: (id: string) => void;
  onUpdateCard: (
    id: string,
    newTitle: string,
    newDescription: string,
    newStatus: string
  ) => void;
}

function Column({
  columns,
  cards,
  columnTitle,
  onDeleteCard,
  onUpdateCard,
}: Props) {
  return (
    <div>
      <h3 className="text-center">{columnTitle}</h3>
      <hr />
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        {cards
          .filter((card) => card.status === columnTitle)
          .map((item, index) => (
            <li key={index} className="list-group-item">
              <Card
                columns={columns}
                title={item.title}
                text={item.description}
                id={item.id}
                status={item.status}
                onDeleteCard={onDeleteCard}
                onUpdateCard={onUpdateCard}
              ></Card>
            </li>
          ))}
      </SortableContext>
      <Analytics />
    </div>
  );
}

export default Column;
