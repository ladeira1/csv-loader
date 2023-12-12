import { useState } from "react"
import { HeaderProps } from "./Header.interface"
import { Button } from "../Button"
import { Input } from "../Input"
import styles from "./Header.module.scss"

export const Header = ({ onFilterChange, onButtonClick }: HeaderProps) => {
  const [filter, setFilter] = useState("")

  const handleChange = (value: string) => {
    setFilter(value)
    onFilterChange(value)
  }

  const handleClick = () => {
    handleChange("")
    onButtonClick()
    return
  }

  return (
    <header className={styles.container}>
      <Input placeholder="Search for specific data" value={filter} onChange={e => handleChange(e.target.value)} />
      <Button onClick={handleClick}>Reset</Button>
    </header>
  )
}