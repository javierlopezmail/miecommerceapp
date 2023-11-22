import { db } from "../../firebase/client"
import {getDocs, collection, query, where, addDoc, writeBatch, Timestamp, documentId } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
//import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"

import { useEffect, useContext, useState, createContext } from "react";

const Checkout = () => {
    const [loading, setloading] = useState(false)
    const [orderId, setOrderId] = useState("")

    //const { cart, total, clearCart } = useState("")
    const { cart, total, clearCart } = useContext(CartContext)
    console.log("The CART: " + cart)


    const createOrder = async ({ name, phone, email}) => {
        setloading(true)

        try {
            const objOrder = {
                buyer : {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            console.log("Cart: " + cart)
            console.log("Cart Id: " + cart.id)
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.foreach(doc => {
                const dataDoc = doc.date()
                let stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantiy = productAddedToCart?.quantity

                if (stockDb >= prodQuantiy) {
                    batch.update(doc.ref, { stock: stockDb = prodQuantiy })
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("There are out of stock products")
            }
        }catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }

    if (loading) {
        return <h1>Your order is being generated...</h1>
    }

    if (orderId) {
        return <h1>Your order's id is: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}></CheckoutForm>
        </div>
    )
}

export default Checkout