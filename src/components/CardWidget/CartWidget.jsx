import React from 'react';
//import { useContext } from 'react';
import { Avatar, Badge, Space } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
//import { CartContext } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';

import { useEffect, useContext, useState, createContext } from "react";

const CartWidget = () => {
    //const { totalQuantity } = useContext(CartContext)
    const { totalQuantity } = useCart()

    return (
        // <div style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <div>
           <Space size="middle">
                {/* <Badge count={0} showZero> */}
                <Badge 
                    count={parseInt(totalQuantity)} 
                    onClick={() => { 
                        //setCartDrawerOpen(true);
                    }}
                >  
                    {/* <Badge count={1} > */}
                    <Avatar shape="square" size="large">
                        <ShoppingCartOutlined />
                    </Avatar>
                </Badge>
            </Space> 
        </div>
    )
}

export default CartWidget