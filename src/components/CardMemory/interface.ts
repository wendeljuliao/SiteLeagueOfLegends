export interface ICardMemoryProps {
  index: number;
  item: any;
  clearedCards: any;
  open: boolean;
  handleClick: (index: number, item: any) => void;
}