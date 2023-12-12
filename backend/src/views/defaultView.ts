export const defaultView = {
  error: (err: any) => ({
    error: err?.message ?? "Unidentified error"
  })
}