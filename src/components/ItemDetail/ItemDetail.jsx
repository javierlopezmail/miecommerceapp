import '../../index.css'
import ItemCount from '../ItemCount/ItemCount'
import { Badge, Card, Image, Typography, Rate } from "antd";
import { Link } from 'react-router-dom'

const ItemDetail = (product) => {
    
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
                    <Rate allowHalf disabled value={product.rating.rate} />,
                    <Link to='/'>Back</Link>,
                    <ItemCount initial={1} stock={product.rating.count} productTitle={product.title} onAdd={(quantity) => console.log('Ammount added ', quantity)} />
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