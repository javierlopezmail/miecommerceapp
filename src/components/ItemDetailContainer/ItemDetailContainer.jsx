import { useState, useEffect } from 'react'
import { getProductById } from '../../Api/api'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {  List } from "antd";

const ItemDetailContainer = () => {
    
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProducts([response])
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setloading(false))
    }, [itemId])

    return(
        <>
            <List
                loading={loading}
                grid={{ column: 1 }}
                renderItem={ (product) => {
                    return (
                        <ItemDetail {...product} />
                    )}
                }
                dataSource={products}
            ></List>
            {/* { loading && (<p>Cargando productos...</p>) }
            { !loading && (
                <div className='ItemDetailContainer'>
                    <ItemDetail {...product} />
                </div>
            )} */}
        </>
    )
}

export default ItemDetailContainer