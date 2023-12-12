import { handleClassNames } from "./index"

describe('handleClassNames test suite', () => {
  it("should return the correct class", () => {
    const response = handleClassNames(["test"])
    expect(response).toEqual("test")
  })

  it("should return the correct classes when more than one is passed", () => {
    const response = handleClassNames(["first", "second", "third"])
    expect(response).toEqual("first second third")
  })

  it("should return the correct classes ignoring anything invalid", () => {
    const response = handleClassNames(["first", "second", undefined, "third", false])
    expect(response).toEqual("first second third")
  })
})