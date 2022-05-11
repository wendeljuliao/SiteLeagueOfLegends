export interface ICardMemoryProps {
  index: number;
  item: any;
  clearedCards: any;
  handleClick: (index: number, item: any) => void;
}