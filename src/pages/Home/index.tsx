import { useState } from "react"
import peopleData from "../../data/people.csv"
import { useDebounce } from "../../utils/useDebounce";
import { Header } from "../../components/Header";
import { CardsList } from "../../components/CardsList";
import { Person } from "../../components/CardsList/components/Card/Card.interface";

export const Home = () => {
  const [data, setData] = useState<Person[]>([])
  
  const handleLoadData = async (filter?: string) => {
    let filteredData: Person[] = peopleData as Person[];
    if(!!filter) {
      filteredData = filteredData.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    }

    setData(filteredData)
  }

  const filterData = useDebounce((value: string) => {
    handleLoadData(value)
  })

  return (
    <div>
      <Header onButtonClick={() => handleLoadData()} onFilterChange={filterData} />
      <CardsList.List>
        {data.map((card, index) => (
          <CardsList.Card key={index} {...card} />
        ))}
      </CardsList.List>
    </div>
  )
}