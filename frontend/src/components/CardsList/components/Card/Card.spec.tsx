import { render } from "@testing-library/react"
import { Card } from "."
import '@testing-library/jest-dom'
import { CardProps } from "./Card.interface"

const makeSut = (props: CardProps) => {
  return render(<Card {...props} />)
}

describe("CardsList Card test suite", () => {
  it("should render correctly", () => {
    const screen = makeSut({
      city: "test city",
      country: "test country",
      favorite_sport: "test sport",
      name: "test name"
    })

    expect(screen.getByText("test name")).toBeInTheDocument()
    expect(screen.getByText("test city, test country")).toBeInTheDocument()
    expect(screen.getByText("test sport")).toBeInTheDocument()
  })
})