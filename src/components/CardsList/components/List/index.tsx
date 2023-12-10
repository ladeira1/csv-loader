import { CardsListProps } from "./List.interface"
import styles from "./List.module.scss"

export const List = ({ children }: CardsListProps) => {
  return (
    <ul className={styles.container}>
      {children}
    </ul>
  )
}