export const defaultView = {
  error: (err: any) => ({
    message: err?.message ?? "Unidentified error"
  })
}