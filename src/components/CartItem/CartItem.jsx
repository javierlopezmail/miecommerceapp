import { useEffect, useContext, useState, createContext } from "react";
import { Popconfirm, Button } from "antd"

const CartItem = ({id, title, price, quantity, subTotal}) => {

    const onRemoveCartItem = () => {
        //do a context.remove item. remove the item visualy
        console.log("Item deleted")
    }
    return (
        <tr key={id}>
              <td>{title}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{subTotal}</td>
              <td>
              <Popconfirm
                title="Are you sure you want to remove this item?"
                onConfirm={() => handleRemoveItem(id)}
                >
                <Button type="danger">
                    Remove
                </Button>
              </Popconfirm>
              </td>
            </tr>

        // <div>
        //     <div>{title}</div>
        //     <div>Quantity: {quantity}</div>
        //     <div>Unit Price: {price}</div>
        //     <div>Sub Total: ${subTotal}</div>
        //     <button onClick={() => onRemoveCartItem()} className="Button">X</button>
        // </div>
    )
}

export default CartItem