import './Item.css'
import { Link } from 'react-router-dom'

const Item = (product) => {
    const url = `/item/${product.id}`
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.image} alt={product.title} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${product.price}
                </p>
                <p className='Info'>
                    Stock disponible: {product.rating.count}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={url} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item