import '../../index.css'
import ItemCount from '../ItemCount/ItemCount'
import { Badge, Card, Image, Typography, Rate, message } from "antd";
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext';
import { useState } from "react";

const ItemDetail = (product) => {
    const { addItem, cart } = useCart()

    const handleOnAdd = (quantity) => {
      const item = {
        id: product.id, 
        title: product.title, 
        price: product.price,
        quantity: quantity,
        subTotal: product.price * quantity
      }
      addItem(item)
      message.success("The product was added to the cart.");
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
                    <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} productTitle={product.description} onAdd={handleOnAdd} />
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
              </Card>
            </Badge.Ribbon>
          );
}

export default ItemDetail