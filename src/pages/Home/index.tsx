import { useState } from "react"
import peopleData from "../../data/people.csv"
import { useDebounce } from "../../hooks/useDebounce";
import { Header } from "../../components/Header";
import { CardsList } from "../../components/CardsList";
import { Person } from "../../components/CardsList/components/Card/Card.interface";
import styles from "./Home.module.scss"
import { toast } from "react-toastify";

export const Home = () => {
  const [data, setData] = useState<Person[]>([])
  
  const handleLoadData = async (filter?: string) => {
    try {
      let filteredData: Person[] = peopleData as Person[];
      if(!!filter) {
        filteredData = filteredData.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      }
      
      setData(filteredData)
    } catch (err) {
      toast("Something went wrong while loading the CSV file", {
        type: "error",
        position: "bottom-right"
      })
    }
  }

  const filterData = useDebounce((value: string) => {
    handleLoadData(value)
  })

  return (
    <div className={styles.container}>
      <Header onButtonClick={() => handleLoadData()} onFilterChange={filterData} />
      <article>
        <CardsList.List>
          {data.map((card, index) => (
            <CardsList.Card key={index} {...card} />
          ))}
        </CardsList.List>
      </article>
    </div>
  )
}