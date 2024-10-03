export const maxID = (
  cards: {
    title: string;
    description: string;
    id: string;
    status: string;
  }[],
  projectCode: string
) => {
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
