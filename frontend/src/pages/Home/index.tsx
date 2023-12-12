import { useState } from "react"
import { useDebounce } from "../../hooks/useDebounce";
import { Header } from "../../components/Header";
import { CardsList } from "../../components/CardsList";
import { Person } from "../../components/CardsList/components/Card/Card.interface";
import styles from "./Home.module.scss"
import { toast } from "react-toastify";
import { DataLoader } from "../../components/DataLoader";
import { api } from "../../services/api";

export const Home = () => {
  const [data, setData] = useState<Person[]>([])

  const fetchData = async (query: string = "") => {
    try {
      const response = await api.get(`/users?q=${query}`)
      window?.scrollTo?.({ top: 0 })
      setData(response.data.data)
    } catch (err) {
      toast((err as any)?.response?.data?.message ?? "Something went wrong while loading the data", {
        type: "error",
        position: "bottom-right"
      })
    }
  }

  const filterData = useDebounce((value: string) => {
    fetchData(value)
  })

  if(!data || data.length === 0) {
    return <DataLoader className={styles.container} onSuccess={fetchData} />
  }

  return (
    <div className={styles.container}>
      <Header onButtonClick={() => fetchData()} onFilterChange={filterData} />
      <article>
        {data?.length > 0 && <CardsList items={data} />}
      </article>
    </div>
  )
}