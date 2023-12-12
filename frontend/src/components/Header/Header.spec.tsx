import { fireEvent, render } from "@testing-library/react"
import { Header } from "."
import '@testing-library/jest-dom'
import { HeaderProps } from "./Header.interface"

const makeSut = (props: HeaderProps) => {
  return render(<Header {...props} />)
}

describe("Header test suite", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render correctly", () => {
    const buttonFunc = jest.fn()
    const filterFunc = jest.fn()
    const screen = makeSut({ onButtonClick: buttonFunc, onFilterChange: filterFunc })

    expect(screen.getByText("Reset")).toBeInTheDocument()
  })

  it("should trigger input events", () => {
    const buttonFunc = jest.fn()
    const filterFunc = jest.fn()
    const screen = makeSut({ onButtonClick: buttonFunc, onFilterChange: filterFunc })
    const input = screen.getByTestId("input")

    fireEvent.change(input, { target: { value: "new value" }})
    expect(filterFunc).toHaveBeenCalledTimes(1)
    expect(filterFunc).toHaveBeenCalledWith("new value")
  })

  it("should trigger button events", () => {
    const buttonFunc = jest.fn()
    const filterFunc = jest.fn()
    const screen = makeSut({ onButtonClick: buttonFunc, onFilterChange: filterFunc })
    const button = screen.getByRole("button")

    expect(screen.getByText("Reset")).toBeInTheDocument()
    fireEvent.click(button)
    expect(buttonFunc).toHaveBeenCalledTimes(1)
  })
})