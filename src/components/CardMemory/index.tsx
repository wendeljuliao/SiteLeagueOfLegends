import { ICardMemoryProps } from "./interface";
import { CardContainer } from "./styles";

function CardMemory({
  index,
  item,
  clearedCards,
  handleClick,
}: ICardMemoryProps) {
  const active = clearedCards[item.id] ? true : false;

  return (
    <CardContainer active={active} onClick={() => handleClick(index, item)}>
      <h1>{item.id}</h1>
    </CardContainer>
  );
}

export default CardMemory;
