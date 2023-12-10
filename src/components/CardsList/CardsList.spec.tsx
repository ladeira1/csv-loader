import { render, within } from "@testing-library/react"
import { CardsList } from "."
import '@testing-library/jest-dom'
import { CardsListProps } from "./CardsList.interface"

const makeSut = (props: CardsListProps) => {
  return render(<CardsList {...props} />)
}

describe("CardsList test suite", () => {
  it("should render correctly", () => {
   const screen = makeSut({ 
      items: [
        { city: "city 1", country: "country 1", favorite_sport: "sport 1", name: "name 1" },
        { city: "city 2", country: "country 2", favorite_sport: "sport 2", name: "name 2" },
        { city: "city 3", country: "country 3", favorite_sport: "sport 3", name: "name 3" },
      ]
    })

    const list = screen.getByRole("list")
    const item = within(list).getByRole("listitem")
    expect(list.children).not.toBeUndefined()
    expect(item).not.toBeUndefined()
  })
})