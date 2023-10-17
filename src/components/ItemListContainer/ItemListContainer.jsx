import { useEffect } from 'react'
import { useState } from 'react'
import { getDatos } from '../../api/index'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos(data.filter((el) => el.category === categoryId))
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )
}