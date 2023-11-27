import React from 'react';
//import { useContext } from 'react';
import { Avatar, Badge, Space, Drawer } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
//import { CartContext } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import  TheCart from '../Cart/Cart';

import { useEffect, useContext, useState, createContext } from "react";

const CartWidget = () => {
    //const { totalQuantity } = useContext(CartContext)
    const { totalQuantity } = useCart()
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

    return (
        // <div style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <div>
           <Space size="middle">
                {/* <Badge count={0} showZero> */}
                <Badge showZero
                    count={parseInt(totalQuantity)} 
                    onClick={() => { 
                        setCartDrawerOpen(true);
                    }}
                >  
                    {/* <Badge count={1} > */}
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
        <TheCart />
      </Drawer>
            </Space> 
        </div>
    )
}

export default CartWidget