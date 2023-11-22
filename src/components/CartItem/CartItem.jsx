import { useEffect, useContext, useState, createContext } from "react";

const CartItem = ({productName, quantity, unitPrice, subTotal}) => {

    const onRemoveCartItem = () => {
        //do a context.remove item. remove the item visualy
        console.log("Item deleted")
    }
    return (
        <div>
            <div>{productName}</div>
            <div>Quantity: {quantity}</div>
            <div>Unit Price: {unitPrice}</div>
            <div>Sub Total: ${subTotal}</div>
            <button onClick={() => onRemoveCartItem()} className="Button">X</button>
        </div>
    )
}

export default CartItem