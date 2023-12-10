import { CardsListProps } from "./List.interface"

export const List = ({ children }: CardsListProps) => {
  return (
    <ul>
      {children}
    </ul>
  )
}