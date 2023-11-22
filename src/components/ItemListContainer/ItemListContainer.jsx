import '../../Index.css'
import { Typography } from 'antd'
//import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from '../../Api/api'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../firebase/client"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { useEffect, useContext, useState, createContext } from "react";

const { Title } = Typography

const ItemListContainer = ({ gretting }) => {
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {  
        
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
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


        // const asyncFunc = categoryId && categoryId !== 'all' ? getProductsByCategory : getProducts

        // asyncFunc(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        //     .finally(() => setloading(false))
    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList products={products} loading={loading} />
        </div>
    )
}

export default ItemListContainer