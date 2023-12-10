import { fireEvent, render } from "@testing-library/react"
import { Input } from "."
import '@testing-library/jest-dom'
import { InputProps } from "./Input.interface"

const makeSut = (props: InputProps) => {
  return render(<Input {...props} />)
}

describe("Input test suite", () => {
  it("should render the input correctly", () => {
    const screen = makeSut({ placeholder: "test placeholder", value: "test value" })
    const input = screen.getByTestId("input")
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("placeholder", "test placeholder")
    expect(input).toHaveAttribute("value", "test value")
  })

  it("should call onChange function when something is typed", () => {
    const func = jest.fn()
    const screen = makeSut({ onChange: func })
    const input = screen.getByTestId("input")

    fireEvent.change(input, { target: { value: "new value" }})
    expect(func).toHaveBeenCalledTimes(1)
  })
})