import Card from "./Card";

interface Props {
  cards: { title: string; text: string; header: string; status: string }[];
  columnTitle: string;
}

function Column({ cards, columnTitle }: Props) {
  return (
    <div>
      <h3 className="text-center">{columnTitle}</h3>
      <hr />
      <div>
        {cards
          .filter((card) => card.status === columnTitle)
          .map((item, index) => (
            <li className="list-group-item">
              <Card
                key={index}
                title={item.title}
                text={item.text}
                header={item.header}
                status={item.status}
              ></Card>
            </li>
          ))}
      </div>
    </div>
  );
}

export default Column;
