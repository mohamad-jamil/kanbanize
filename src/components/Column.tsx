import Card from "./Card";

interface Props {
  cards: { title: string; text: string; header: string }[];
  columnTitle: string;
}

function Column({ cards, columnTitle }: Props) {
  return (
    <div>
      <h4 className="text-center">{columnTitle}</h4>
      <hr />
      <div>
        {cards.map((item, index) => (
          <li className="list-group-item">
            <Card
              key={index}
              title={item.title}
              text={item.text}
              header={item.header}
            ></Card>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Column;
