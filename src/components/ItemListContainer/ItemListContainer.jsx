import '../../styles/ItemListContainer/_itemListContainer.scss'

export const ItemListContainer = ({ greeting }) => {

    return (
        <div className="list__container">
            <h2>Item List Container</h2>
            <hr />
            <p>{greeting}</p>
        </div>
    )
}