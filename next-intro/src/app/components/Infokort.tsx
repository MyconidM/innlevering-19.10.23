
export type creatureItemProps = {
    id: string
    title: string
    image: string
    sort: string
    shortInfo: string
    onDelete?: (id: string) => void
}

const Infokort = (props: creatureItemProps) => {
    const { title, sort, shortInfo, id, image, onDelete} = props

    function handleDelete() {
        onDelete?.(id) // Calls the onDelete function if it exists, passing the id as an argument
      }

    return (
        <div className="ItemConteiner pb-10">
            <img src={image} alt="Bilde av skjødyr" />
            <h2 className="text-2xl">
                {title}
            </h2>
            <p>
                Type: {sort}
            </p>
            <p>{shortInfo}</p>
             {onDelete ? (
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                <div className="button">
                    <button onClick={handleDelete} className="text-black bg-neutral-300 p-2 rounded-md px-6">
                        Slett
                    </button>
                </div>
                </td>
            ) : null} 
        </div>
        )

}

export default Infokort