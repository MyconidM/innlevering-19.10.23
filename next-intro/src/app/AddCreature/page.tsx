"use client"

import { useEffect, useState } from "react";
import { CreatureInfo } from "../features/seacreatures/types";


const AddCreature = () => {
    const [seaCreatures, setSeaCreatures] = useState<CreatureInfo[]>([])
    const [newCreature, setNewCreature] = useState({ id: "", title: "", image: "", sort: "", shortInfo: ""  })

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

    const creatureId = () => {
        const creatureAmount = seaCreatures.length +1;
        setNewCreature({
            ...newCreature, id: creatureAmount})}

    const submitCreature = async (url = '/api/seacreatures', data = {newCreature}) => {

        
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const toApi = await response.json();
          console.log(toApi)
          return response.json();
    }


    const handleTitle = (event) => {
        setNewCreature({
            ...newCreature, title: event.target.value})
        console.log("Change creature ", event.target.value)
    }
    const handleImage = (event) => {
        setNewCreature({
            ...newCreature, image: event.target.value})
        console.log("Change creature ", event.target.value)
    }
    const handleSort = (event) => {
        setNewCreature({
            ...newCreature, sort: event.target.value})
        console.log("Change creature ", event.target.value)
    }
    const handleShortInfo = (event) => {
        setNewCreature({
            ...newCreature, shortInfo: event.target.value})
        console.log("Change creature ", event.target.value)
    }


    

    console.log("newCreature: " + newCreature.title)
    return (
        <section>
            <div className="px-20 box">
                <h2>Add creature</h2>
                <form onSubmit={submitCreature}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" 
                    onChange={handleTitle} 
                    value={newCreature.title} 
                    className="text-black" />
                
                    <label htmlFor="picture">Bilde link: </label>
                    <input type="text" id="picture"
                    onChange={handleImage}
                    value={newCreature.image} 
                    className="text-black" />

                    <label htmlFor="sort">Type: </label>
                    <input type="text" id="sort" 
                    onChange={handleSort} 
                    value={newCreature.sort} 
                    className="text-black" />
                
                    <label htmlFor="shortInfo">ShortInfo: </label>
                    <textarea id="shortInfo" 
                    onChange={handleShortInfo} 
                    value={newCreature.shortInfo} 
                    className="text-black" />
                       
                    <button className="text-black bg-neutral-300 p-2 rounded-md px-6" type="submit">Create new creature</button>
                </form>

            </div>

        </section>
        
    )
}

export default AddCreature