import { NextResponse } from "next/server"

type seaCreatures = {
    id: string
    title: string
    img: string
    sort: string
    shortInfo: string
}
const seaCreatures = [
        {
            id: "1",
            title: "Hval",
            image: "https://media.wwf.no/assets/article_images/_1600x1067_crop_center-center_none/Knolhval_WW2131047.jpg",
            sort: "Pattedyr",
            shortInfo: "Hvaler eller kvaler (Cetacea) er en gruppe store pattedyr, som gjennom evolusjonen helt ut har blitt tilpasset et liv i vann. Sammen med seler og sjøkyr utgjør hvalene gruppen sjøpattedyr. Hvalenes nærmeste nålevende slektninger er imidlertid flodhestene (Hippopotamidae). Hvalhannen kalles okse, hunnen ku og avkommet kalv."
        },
        {
            id: "2",
            title: "Laks",
            image: "https://laksefakta.no/globalassets/hel-laks-web.jpg?w=1280&h=500&mode=DownFill&hash=60ce5899fee869ea673ba53be5fdf176",
            sort: "Virveldyr",
            shortInfo: "Laks er en fiskeart i laksefamilien som vanligvis lever mye av livet i havet, men som vandrer opp i elver for å gyte. Laksen er ettertraktet både som matfisk og sportsfisk, og er gjennom oppdrettsnæringen blitt en særdeles viktig eksportvare."
        }
    ]
export function GET() {
    return NextResponse.json(
        { data: Array.from(seaCreatures.values()) }, // JSON data to send in the response.
        { status: 200 }, // HTTP status code for the response (200 OK in this case).
      )
}

export function POST() {

}

// export default function handler(req, res) {
//     if (req.method === 'POST') {
//             const new = req.body.data

//         } 
//         seaCreatures.push(new)
//   }