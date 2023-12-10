import { useRef } from "react"
import styles from "./CardsList.module.scss"
import { ViewportList } from "react-viewport-list"
import { CardsListProps } from "./CardsList.interface";
import { handleClassNames } from "../../utils/handleClassNames";
import { Card } from "./components/Card";

export const CardsList = ({ className, items }: CardsListProps) => {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <ul className={handleClassNames([styles.container, className])} ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={items}
      >
        {(item, index) => (
          <Card key={index} {...item} />
        )}
      </ViewportList>
    </ul>
  )
}