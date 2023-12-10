import { useState } from "react"
import { HeaderProps } from "./Header.interface"

export const Header = ({ onFilterChange, onButtonClick }: HeaderProps) => {
  const [filter, setFilter] = useState("")
  const [hasLoaded, setHasLoaded] = useState(false)

  const handleChange = (value: string) => {
    setFilter(value)
    onFilterChange(value)
  }

  const handleClick = () => {
    onButtonClick()
    setHasLoaded(true)
    handleChange("")
  }

  const buttonText = hasLoaded ? "Reset" : "Load CSV"

  return (
    <header>
      <input placeholder="Search for specific data" value={filter} onChange={e => handleChange(e.target.value)} />
      <button onClick={handleClick}>{buttonText}</button>
    </header>
  )
}