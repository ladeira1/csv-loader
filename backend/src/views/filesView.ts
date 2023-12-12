import { defaultView } from "./defaultView"

export const filesView = { 
  ...defaultView,
  success: () => ({
    message: "The file was uploaded successfully."
  })
}