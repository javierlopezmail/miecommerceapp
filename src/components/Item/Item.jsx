import './Item.css'
import { Link } from 'react-router-dom'
import { Badge, Card, Image, Typography, Rate } from "antd";

const Item = (product) => {
    const url = `/item/${product.id}`
    return (
        <>
        <Badge.Ribbon
              className="itemCardBadge"
            >
              <Card
                className="item-card"
                title={product.title}
                cover={<Image className="item-card-image" src={product.image} />}
                actions={[
                    <Rate allowHalf disabled value={product.rating.rate} />,
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
                Stock: {product.rating.count}
              </Card>
            </Badge.Ribbon>
        </>
        


        // <article className='CardItem'>
        //     <header className='Header'>
        //         <h2 className='ItemHeader'>
        //             {product.title}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={product.image} alt={product.title} className='ItemImg' />
        //     </picture>
        //     <section>
        //         <p className='Info'>
        //             Precio: ${product.price}
        //         </p>
        //         <p className='Info'>
        //             Stock disponible: {product.rating.count}
        //         </p>
        //     </section>
        //     <footer className='ItemFooter'>
        //         <Link to={url} className='Option'>Ver detalle</Link>
        //     </footer>
        // </article>
    )
}

export default Item