import { fireEvent, render } from "@testing-library/react"
import { Home } from "."
import '@testing-library/jest-dom'

const makeSut = () => {
  return render(<Home />)
}

describe("Home test suite", () => {
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
    const screen = makeSut()
    expect(screen.getByText("Search for specific data")).toBeInTheDocument()
    expect(screen.getByText("Load CSV")).toBeInTheDocument()
  })

  it("should fetch data when button is clicked", () => {
    const screen = makeSut()
    const button = screen.getByText("Load CSV")

    fireEvent.click(button)
    jest.advanceTimersByTime(1000)
    const list = screen.getByRole("list")
    const item = screen.getAllByRole("listitem")
    expect(list.children).not.toBeUndefined()
    expect(item).not.toBeUndefined()
    expect(button).toHaveTextContent("Reset")
  })
})