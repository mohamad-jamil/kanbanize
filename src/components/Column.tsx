import Card from "./Card";

interface Props {
  cards: {
    title: string;
    description: string;
    id: string;
    status: string;
  }[];
  columnTitle: string;
  onUpdateCard: (id: string, newTitle: string, newDescription: string) => void;
}

function Column({ cards, columnTitle, onUpdateCard }: Props) {
  return (
    <div>
      <h3 className="text-center">{columnTitle}</h3>
      <hr />
      <div>
        {cards
          .filter((card) => card.status === columnTitle)
          .map((item, index) => (
            <li key={index} className="list-group-item">
              <Card
                title={item.title}
                text={item.description}
                id={item.id}
                status={item.status}
                onUpdateCard={onUpdateCard}
              ></Card>
            </li>
          ))}
      </div>
    </div>
  );
}

export default Column;
