import '../../styles/ItemCard/_itemCard.scss'
import { Link } from "react-router-dom"

const ItemCard = ({ item }) => {

    return (
        <div className='col-3 m-5'>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} className="img" />
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            {item.stock <= 5 && <p className='color-texto-error'>Bajo stock</p>}
            <Link to={`/detail/${item.id}`} className="btn btn-primary color-boton">Ver más</Link>
        </div>
    )
}

export default ItemCard
