import '../../Index.css'
import { Typography } from 'antd'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../firebase/client"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { useEffect, useState } from "react";

const { Title } = Typography

const ItemListContainer = ({ gretting }) => {
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {  
        
        const collectionRef = (categoryId && categoryId != "all")
        ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
        : collection(db, 'products')

    getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setloading(false)
        })
    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList products={products} loading={loading} />
        </div>
    )
}

export default ItemListContainer