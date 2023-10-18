import { NextResponse } from "next/server"

type creatureInfo = {
    id: "number"
    title: "string"
    sort: "string"
    shortInfo: "string"
}

export function GET() {

    const seaCreatures = [
        {
            id: 1,
            title: "Hval",
            sort: "Pattedyr",
            shortInfo: "Hvaler eller kvaler (Cetacea) er en gruppe store pattedyr, som gjennom evolusjonen helt ut har blitt tilpasset et liv i vann. Sammen med seler og sjøkyr utgjør hvalene gruppen sjøpattedyr. Hvalenes nærmeste nålevende slektninger er imidlertid flodhestene (Hippopotamidae). Hvalhannen kalles okse, hunnen ku og avkommet kalv."
        },
        {
            id: 2,
            titel: "Laks",
            sort: "Virveldyr",
            shortInfo: "Laks er en fiskeart i laksefamilien som vanligvis lever mye av livet i havet, men som vandrer opp i elver for å gyte. Laksen er ettertraktet både som matfisk og sportsfisk, og er gjennom oppdrettsnæringen blitt en særdeles viktig eksportvare."
        }
    ]


    return NextResponse.json(
        { data: Array.from(seaCreatures.values()) }, // JSON data to send in the response.
        { status: 200 }, // HTTP status code for the response (200 OK in this case).
      )
}