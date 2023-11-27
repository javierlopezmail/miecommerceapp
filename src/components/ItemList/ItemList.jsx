import Item from '../Item/Item'
import {  List } from "antd";

const ItemList = ({products, loading}) => {
    return(
        <List
        loading={loading}
        grid={{ column: 3 }}
        renderItem={ (product) => {
            return (
                <Item key={product.id} {...product} />
            )}
        }
        dataSource={products}
      ></List>
    )
}

export default ItemList