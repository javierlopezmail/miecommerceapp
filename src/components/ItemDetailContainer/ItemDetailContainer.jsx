//import { useState, useEffect } from 'react'
// import { getProductById } from '../../Api/api'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase/client'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {  List } from "antd";

import { useEffect, useContext, useState, createContext } from "react";

const ItemDetailContainer = () => {
    
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             setProducts([response])
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    //         .finally(() => setloading(false))
            
            const docRef = doc(db, 'products', itemId)

            getDoc(docRef)
                .then(response => {
                    //const data = response.data()
                    if (response.exists())
                    {
                        console.log("Exists")
                        console.log("Response: " + response)
                        //console.log("Data:" + data)
                        //const productAdapted = { id: response.id, ...response.price}
                        const productAdapted = { id: response.id, ...response.data() }
                        console.log(productAdapted)
                        setProducts([productAdapted])
                        console.log("OK")
                        console.log(products)
                        console.log("OK1")
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
            {/* <List
                loading={loading}
                grid={{ column: 1 }}
                renderItem={ (product) => {
                    return (
                        <p>Hola</p>
                        // <ItemDetail {...product} />
                    )}
                }
                dataSource={"Hola"}
            ></List> */}
        </>
    )
}

export default ItemDetailContainer