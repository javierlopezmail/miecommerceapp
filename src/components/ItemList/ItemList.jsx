import './ItemList.css'
import Item from '../Item/Item'
import {  List } from "antd";

const ItemList = ({products}) => {
    return(
        <List
        grid={{ column: 3 }}
        renderItem={ (product) => {
            return (
                <Item key={product.id} {...product} />
            )}
        }
        dataSource={products}
      ></List>
        // <div className='ListGroup'>
        //     {products.map(prod => <Item key={prod.id} {...prod} />)}
        // </div>
    )
}

export default ItemList