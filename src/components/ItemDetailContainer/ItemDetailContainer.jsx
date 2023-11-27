import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase/client'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {  List } from "antd";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
            const docRef = doc(db, 'products', itemId)

            getDoc(docRef)
                .then(response => {
                    if (response.exists())
                    {
                        const productAdapted = { id: response.id, ...response.data() }
                        setProducts([productAdapted])
                    } else {
                        console.log("Not Exists")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setloading(false)
                })
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
        </>
    )
}

export default ItemDetailContainer