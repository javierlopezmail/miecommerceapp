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
                    <ItemCount initial={1} stock={product.rating.count} productTitle={product.title} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
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

        // <article className='CardItem'>
        //     <header className='Header'>
        //         <h2 className='ItemHeader'>
        //             {product.title}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={product.image} alt={product.title} className="ItemImg" />
        //     </picture>
        //     <section>
        //         <p className='Info'>
        //             Categoría: {product.category}
        //         </p>
        //         <p className='Info'>
        //             Descripción: {product.description}
        //         </p>
        //         <p className='Info'>
        //             Precio: ${product.price}
        //         </p>
        //     </section>
        //     <footer className='ItemFooter'>
        //         <ItemCount initial={1} stock={product.rating.count} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        //     </footer>
        //     <footer className='ItemFooter'>
        //         <Link to='/' className='Option'>Inicio</Link>
        //     </footer>
        // </article>
    //)
}

export default ItemDetail