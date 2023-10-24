import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = (product) => {
    console.log(product)
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.image} alt={product.title} className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {product.category}
                </p>
                <p className='Info'>
                    Descripción: {product.description}
                </p>
                <p className='Info'>
                    Precio: ${product.price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={product.rating.count} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>
            <footer className='ItemFooter'>
                <Link to='/' className='Option'>Inicio</Link>
            </footer>
        </article>
    )
}

export default ItemDetail