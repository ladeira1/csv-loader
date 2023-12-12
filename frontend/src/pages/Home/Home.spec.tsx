import { render } from "@testing-library/react"
import { Home } from "."
import '@testing-library/jest-dom'

const makeSut = () => {
  return render(<Home />)
}

describe("Home test suite", () => {
  window.scrollTo = jest.fn();
  it("should render correctly", () => {
    const screen = makeSut()
    expect(screen.getByText("Load CSV")).toBeInTheDocument()
  })
})