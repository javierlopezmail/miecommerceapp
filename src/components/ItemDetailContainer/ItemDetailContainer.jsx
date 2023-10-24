import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [loading, setloading] = useState(true)
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setloading(false))
    }, [itemId])

    return(
        <>
            { loading && (<p>Cargando productos...</p>) }
            { !loading && (
                <div className='ItemDetailContainer'>
                    <ItemDetail {...product} />
                </div>
            )}
        </>
    )
}

export default ItemDetailContainer