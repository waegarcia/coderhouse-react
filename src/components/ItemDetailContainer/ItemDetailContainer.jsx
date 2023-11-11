import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../api/firebase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc) => {
                const _item = { id: doc.id, ...doc.data() }
                setItem(_item)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2 className="list__container">Cargando...</h2>
                    : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer
