//import { useContext } from "react"
//import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import Checkout from "../Checkout/Checkout";
import { Link } from "react-router-dom"
import { useCart } from '../../context/CartContext';
import { Table, Button, Popconfirm, Drawer } from "antd"

import { useEffect, useContext, useState, createContext } from "react";

const TheCart = () => {
    //const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    const { cart, clearCart, totalQuantity, removeItem, total} = useCart()
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);

    const tableSummary = () => (
        <Table.Summary.Row>
          <Table.Summary.Cell><b>Total ${total}</b></Table.Summary.Cell>
          <Table.Summary.Cell colSpan={4} />
        </Table.Summary.Row>
      );

      const handleRemoveItem = (itemId) => {
        // Remove the item from the cart
        removeItem(itemId);
      };

    

    // console.log("El carro: " + cart)
    // console.log("El total: " + total)

    // if (totalQuantity === 0) {
    //     return (
    //         <div>
    //             <h1>There are no items in the cart</h1>
    //             <Link to='/' className="Option">Productos</Link>
    //         </div>
    //     )
    // }

    return (
        <>
        <Table
        pagination={false}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Quantity",
            dataIndex: "quantity"
            // render: (value, record) => {
            //   return (
            //     <InputNumber
            //       min={0}
            //       defaultValue={value}
            //       onChange={(value) => {
            //         setCartItems((pre) =>
            //           pre.map((cart) => {
            //             if (record.id === cart.id) {
            //               cart.total = cart.price * value;
            //             }
            //             return cart;
            //           })
            //         );
            //       }}
            //     ></InputNumber>
            //   );
            // },
          },
          {
            title: "Sub-Total",
            dataIndex: "subTotal",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Popconfirm
                title="Are you sure you want to remove this item?"
                onConfirm={() => handleRemoveItem(record.id)}
              >
                <Button danger="true" size="small">
                  Remove
                </Button>
              </Popconfirm>
            ),
          },
        ]}
        dataSource={cart}
        rowKey="id"
        summary={tableSummary}
      />
        {/* <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            { cart.map( p => <CartItem key={p.id} {...p}/>) }
          {/* {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))} */}
        {/* </tbody>
      </table>
    </div> */} 
      <Button disabled={totalQuantity === 0}
        onClick={() => {
          setCheckoutDrawerOpen(true);
        }}
        type="primary"
      >Checkout Your Cart</Button>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Checkout />
      </Drawer>
      </>


        // <div>
        //     {/* puede ser que esta desestructura de p.id etc esté mal probar con campo */}
        //     { cart.map( p => <CartItem key={p.id} {...p}/>) }
        //     <h3>Total: ${parseFloat(total).toFixed(2)}</h3>
        //     <button onClick={() => clearCart()} className="Button">Clear Cart</button>
        //     <Link to="/checkout" className="Option">Checkout</Link>
        // </div>
    )
};

export default TheCart