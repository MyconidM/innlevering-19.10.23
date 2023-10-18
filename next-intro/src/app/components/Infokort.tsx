
export type creatureItemProps = {
    title: string
    sort: string
    shortInfo: string
}

const Infokort = (props: creatureItemProps) => {
    const { title, sort, shortInfo} = props

    return (
        <div className="ItemConteiner">
            <h1>
                {title}
            </h1>
            <p>
                Type: {sort}
            </p>
            <p>{shortInfo}</p>
        </div>
        )

}

export default Infokort