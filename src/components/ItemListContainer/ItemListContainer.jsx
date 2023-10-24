import './ItemListContainer.css'
import { Typography } from 'antd'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const { Title } = Typography

const ItemListContainer = ({ gretting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {        
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div class="item-list-container">
            <Title level={3}>{gretting}</Title>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer