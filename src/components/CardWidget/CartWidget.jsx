import React from 'react';
import { Avatar, Badge, Space } from 'antd';

const CartWidget = () => {
    return (
        <div>
           <Space size="middle">
                <Badge count={0} showZero>
                    <Avatar shape="square" size="large" />
                </Badge>
            </Space> 
        </div>
    )
}

export default CartWidget