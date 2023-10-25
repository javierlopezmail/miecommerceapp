import '../../Index.css'
import { useState } from 'react'
import { Button, Typography, message } from 'antd'

const ItemCount = ({stock, initial, productTitle, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }

    return(
        <>
            <div className='inline-block'>
                <Button className="Button" onClick={decrement}>-</Button>
            </div>
            <div className='inline-block'>
                <Typography.Paragraph className="paragraph-spacing">
                      {quantity}  
                </Typography.Paragraph>
            </div>
            <div className='inline-block'>
                <Button className='Button' onClick={increment}>+</Button>
            </div>
            <div className='inline-block'>
                <Button type="link" onClick={() => { message.success(`${productTitle} has been added to cart`); }} >
                    Add to Cart
                </Button>
            </div>
        </>
        
        // <div className='Counter'>
        //     <div className='Controls'>
        //         <button className="Button" onClick={decrement}>-</button>
        //         <h4 className='Number'>{quantity}</h4>
        //         <button className='Button' onClick={increment}>+</button>
        //     </div>
        //     <div>
        //         <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
        //             Agregar al carrito
        //         </button>
        //     </div>
        // </div>
    )
}

export default ItemCount