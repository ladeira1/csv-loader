import { Person } from "./components/Card/Card.interface";

export interface CardsListProps {
  className?: string;
  items: Person[];
}