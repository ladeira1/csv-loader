import { CardProps } from "./Card.interface"

export const Card = ({ name, country, city, favorite_sport }: CardProps) => {
  return (
    <li>
      <p>{name}</p>
      <p>{`${city}, ${country}`}</p>
      <p>Favorite Sport: {favorite_sport}</p>
    </li>
  )
}