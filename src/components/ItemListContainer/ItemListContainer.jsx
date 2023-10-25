import '../../Index.css'
import { Typography } from 'antd'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../Api/api'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const { Title } = Typography

const ItemListContainer = ({ gretting }) => {
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {        
        const asyncFunc = categoryId && categoryId !== 'all' ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => setloading(false))
    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList products={products} loading={loading} />
        </div>
    )
}

export default ItemListContainer