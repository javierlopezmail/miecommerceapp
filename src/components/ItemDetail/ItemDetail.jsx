import '../../index.css'
//import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Badge, Card, Image, Typography, Rate } from "antd";
import { Link } from 'react-router-dom'
//import { CartContext } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import { logObject } from '../../Log/LogObject'
import { logArray } from '../../Log/LogArray'

import { useEffect, useContext, useState, createContext } from "react";

const ItemDetail = (product) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    //const { addItem } = useContext(CartContext)
    const { addItem, cart } = useCart()

    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {
        id: product.id, 
        title: product.title, 
        price: product.price,
        quantity: quantity,
        subTotal: product.price * quantity
      }
      console.log("Item: ")
      logObject(item);
      addItem(item)
      let aux = [
        {
          id: "1",
          name: "name1"
        },
        {
          id: "2",
          name: "name2"
        }
      ];

      console.log("Aux: ")
      logArray(aux);


      console.log("Cart: ")
      logArray(cart);

    }
    
    return (
            <Badge.Ribbon
              className="item-card-badge"
            >
              <Card
                className="item-card"
                title={product.title}
                cover={
                  <Image className="item-card-image" src={product.image} />
                }
                actions={[
                    <Rate allowHalf disabled value={product.rate} />,
                    <Link to='/'>Back</Link>,
                    <ItemCount initial={1} stock={product.stock} productTitle={product.description} onAdd={(quantity) => console.log('Ammount added ', quantity)} />
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: ${product.price}
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph>
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>                
                { 
                  quantityAdded > 0 ? (
                      <Link to='/cart' className='Option'>Terminar</Link>
                  ) : (
                      <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd}/>
                  )
                }
              </Card>
            </Badge.Ribbon>
          );
}

export default ItemDetail