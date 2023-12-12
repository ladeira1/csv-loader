import { ChangeEvent, useRef } from "react"
import { Button } from "../Button"
import { api } from "../../services/api"
import { toast } from "react-toastify";
import styles from "./DataLoader.module.scss"
import { handleClassNames } from "../../utils/handleClassNames";
import { DataLoaderProps } from "./DataLoader.interface";

export const DataLoader = ({ className, onSuccess }: DataLoaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const sendFile = async (file: File) => {
    try {
      const formData = new FormData()
      formData.set("file", file)
      await api.post("/files", formData)
      onSuccess?.()
    } catch (err) {
      toast((err as any)?.response?.data?.message ?? "Something went wrong submitting the CSV file", {
        type: "error",
        position: "bottom-right"
      })
    }
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files?.[0]) return;
    sendFile(e.target.files?.[0])
  };

  return (
    <div className={handleClassNames([className, styles.center])}>
      <Button  onClick={() => inputRef?.current?.click()}>
        <input ref={inputRef} data-testid="load-input" type={"file"} accept={".csv"} onChange={handleOnChange} />
        Load CSV
      </Button>
    </div>
  )
}