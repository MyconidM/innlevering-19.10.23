"use client"

import { useEffect, useState } from "react"
import { type CreatureInfo } from "../features/seacreatures/types"
import Infokort from "../components/Infokort"
import type { FilterOption } from "../hooks/useMultiFilter"
import { useMultiFilter } from "../hooks/useMultiFilter"
import { Filter } from "../components/Filter"


const InfoPage = () => {

    const [seaCreatures, setSeaCreatures] = useState<CreatureInfo[]>([])

    const filterOptions: FilterOption<CreatureInfo>[] = [
      {
        key: "sort",
        label: "Type",
        values: (items) => items.map((item) => item.sort),
      }
    ]
    
    const { data, handleFilter, filter, resetFilter, options } =
    useMultiFilter<CreatureInfo>({
      options: filterOptions,
      data: seaCreatures,
    })

    useEffect(() => {
        // Using async/await to be able to handle the promise coming from fetch
        const getSeaCreatures = async () => {
        // Using fetch and the url matchin folder (api/SeaCreatures/route.ts)
        // Using get since that is what this route handles
        const response = await fetch("/api/seacreatures", {
            method: "get",
        })

        // Using a built in method on the fetch-response that converts the "stream" to JSON (object-like data)
        const result = (await response.json()) as { data: CreatureInfo[] }
        // Using the state-setter to update the state after component is mounted
        setSeaCreatures(result.data)
        }

        // Call the fetch function
        getSeaCreatures()
    }, [])

    //const creature = seaCreatures[]
    const handleDelete = (id: string) => {
      setSeaCreatures((prev) => prev.filter((response) => response.id !== id))
    }

    console.log(seaCreatures[0])
    if (!seaCreatures.length) {
        return (
          <div className="mx-auto w-full max-w-3xl">
            <p>Ingen responser</p>
          </div>
        )
      }
    const creture = seaCreatures?.map((e) => {e})
    console.log(seaCreatures)

    

      return (
        <div className="mx-auto mt-8 w-full max-w-4xl">
           <section className="flex gap-4">
            {/* Using the Filter component with necessary props */}
            {/* Using .map to traverse the filterOptions-array */}
            {filterOptions.map((option) => (
          <Filter
            key={option.key}
            id={option.key}
            filterValue={filter[option.key]}
            options={options[option.key]}
            label={option.label}
            onChange={(e) => {
              handleFilter(e, option.key) // Using the handleFilter that comes from the custom hook
            }}
            onSubmit={(e) => {
              e.preventDefault()
              resetFilter(option.key) // Using the resetFilter that comes from the custom hook
            }}
          />
        ))}
      </section> 
      <div className="conteiner">
          {data.map((e) =>( 
            <Infokort
            key={e.id}
              id={e.id}
                title={e.title}
                image={e.image}
                sort={e.sort}
                shortInfo={e.shortInfo}
                onDelete={handleDelete}
                />)
          ) } 
      </div>

        </div>
      )
}

export default InfoPage