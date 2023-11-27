import React from 'react';
import { Avatar, Badge, Space, Drawer } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from '../../context/CartContext';
import  Cart from '../Cart/Cart';
import { useState } from "react";

const CartWidget = () => {
    const { totalQuantity } = useCart()
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

    return (
        <div>
           <Space size="middle">
                <Badge showZero
                    count={parseInt(totalQuantity)} 
                    onClick={() => { 
                        setCartDrawerOpen(true);
                    }}
                >  
                    <Avatar shape="square" size="large">
                        <ShoppingCartOutlined />
                    </Avatar>
                </Badge>
                <Drawer
                    open={cartDrawerOpen}
                    onClose={() => {
                    setCartDrawerOpen(false);
                    }}
                    title="Your Cart"
                    contentWrapperStyle={{ width: 500 }}
                >
                    <Cart />
                </Drawer>
            </Space> 
        </div>
    )
}

export default CartWidget