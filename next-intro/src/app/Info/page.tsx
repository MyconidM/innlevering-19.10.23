"use client"

import { useEffect, useState } from "react"
import { creatureInfo } from "../features/seacreatures/types"
import Infokort from "../components/Infokort"
import Conteiner from "../components/Container"

const InfoPage = () => {
        
    const [responses, setResponses] = useState<creatureInfo[]>([])

    useEffect(() => {
        // Using async/await to be able to handle the promise coming from fetch
        const getResponses = async () => {
        // Using fetch and the url matchin folder (api/responses/route.ts)
        // Using get since that is what this route handles
        const response = await fetch("/api/seacreatures", {
            method: "get",
        })

        // Using a built in method on the fetch-response that converts the "stream" to JSON (object-like data)
        const result = (await response.json()) as { data: creatureInfo[] }
        // Using the state-setter to update the state after component is mounted
        setResponses(result.data)
        }

        // Call the fetch function
        getResponses()
    }, [])


    if (!responses.length) {
        return (
          <div className="mx-auto w-full max-w-3xl">
            <p>Ingen responser</p>
          </div>
        )
      }
      console.log(responses.length)
    const id= responses.map((e) => {e.id})
      return (
        <div className="mx-auto mt-8 w-full max-w-4xl">
          <section className="flex gap-4">
            {/* Using the Filter component with necessary props */}
            {/* Using .map to traverse the filterOptions-array */}
            
          </section>
          {/* Using "children" in Responses to be able to have the flexibility to add whatever we like */}
          <Conteiner>
            <tbody>
                {/* {responses.map((e) => {
                    <Infokort 
                        title={e.id}
                        sort={e.sort}
                        shortInfo={e.shortInfo}
                    />
                }
                ) } */}
            </tbody>
          </Conteiner>
            
            
        </div>
      )
}

export default InfoPage