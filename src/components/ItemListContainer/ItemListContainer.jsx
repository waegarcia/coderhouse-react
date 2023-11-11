import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../api/firebase/config'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where("category", "==", categoryId))
            : productosRef

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2 className="list__container">Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )
}
