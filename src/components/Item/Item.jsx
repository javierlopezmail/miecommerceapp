import '../../Index.css'
import { Link } from 'react-router-dom'
import { Badge, Card, Image, Typography, Rate } from "antd";

import { useEffect, useContext, useState, createContext } from "react";

const Item = (product) => {
    const url = `/item/${product.id}`
    return (
        <>
        <Badge.Ribbon
              className="item-card-badge"
            >
              <Card
                className="item-card"
                title={product.title}
                cover={<Image className="item-card-image" src={product.image} />}
                actions={[
                    <Rate allowHalf disabled value={product.rate} />,
                    <Link to={url}>Detail</Link>
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price: ${product.price}{" "}
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph className="ant-card-description">
                        {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                Stock: {product.stock}
              </Card>
            </Badge.Ribbon>
        </>
    )
}

export default Item