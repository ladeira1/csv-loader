import { act, render } from "@testing-library/react"
import { Button } from "."
import { ButtonProps } from "./Button.interface"
import '@testing-library/jest-dom'

const makeSut = (props: ButtonProps) => {
  return render(<Button {...props} />)
}

describe("Button test suite", () => {
  it("should render the button correctly", () => {
    const screen = makeSut({ children: "Test text" })
    expect(screen.getByText("Test text")).toBeInTheDocument()
  })

  it("should trigger onClick when clicked", () => {
    const func = jest.fn()
    const screen = makeSut({ children: "Test text", onClick: func })
    const button = screen.getByText("Test text")
    act(() => {
      button.click()
    })
    expect(func).toHaveBeenCalledTimes(1)
  })
})