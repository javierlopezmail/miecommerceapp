import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartWidget = () => {
    return (
        <div>
           <Space size="middle">
                <Badge count={0} showZero>
                    <Avatar shape="square" size="large">
                        <ShoppingCartOutlined />
                    </Avatar>
                </Badge>
            </Space> 
        </div>
    )
}

export default CartWidget