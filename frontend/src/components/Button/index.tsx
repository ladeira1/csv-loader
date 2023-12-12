import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.scss"

export const Button = ({ type="button", children, ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest} className={styles.container}>{children}</button>
  )
}