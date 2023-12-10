import { useState } from "react"
import peopleData from "../../data/people.csv"
import { useDebounce } from "../../utils/useDebounce";
import { Header } from "../../components/Header";

interface Person {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const Home = () => {
  const [data, setData] = useState<Person[]>()
  
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

  console.log("data", data)

  return (
    <div>
      <Header onButtonClick={() => handleLoadData()} onFilterChange={filterData} />
    </div>
  )
}