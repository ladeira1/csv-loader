import { CardProps } from "./Card.interface"
import styles from "./Card.module.scss"

export const Card = ({ name, country, city, favorite_sport }: CardProps) => {
  return (
    <li className={styles.container}>
      <strong className={styles.name}>{name}</strong>
      <p>Favorite Sport: <strong>{favorite_sport}</strong></p>
      <footer>
        <p>{`${city}, ${country}`}</p>
      </footer>
    </li>
  )
}