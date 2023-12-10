import { useId, useState } from "react"
import { InputProps } from "./Input.interface"
import styles from "./Input.module.scss"
import { handleClassNames } from "../../utils/handleClassNames"

export const Input = ({ placeholder, ...rest }: InputProps) => {
  const id = useId()
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <label
      htmlFor={id}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      className={handleClassNames([styles.container, isSelected && styles.containerSelected])}
    >
      <input data-testid="input" id={id} placeholder={placeholder} {...rest} className={styles.container} />
      <p>{placeholder}</p>
    </label>
  )
}