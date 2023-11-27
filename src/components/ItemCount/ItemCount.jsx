import '../../Index.css'
import { Button, Typography } from 'antd'
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
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
                <Button type="link" onClick={() => onAdd(quantity) } disabled={stock <= 0} >
                    Add to Cart
                </Button>
            </div>
        </>
    )
}

export default ItemCount