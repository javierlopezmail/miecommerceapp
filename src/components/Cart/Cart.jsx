import Checkout from "../Checkout/Checkout";
import { useCart } from '../../context/CartContext';
import { Table, Button, Popconfirm, Drawer } from "antd"
import { useState } from "react";

const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem, total} = useCart()
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);

    const tableSummary = () => (
        <Table.Summary.Row>
          <Table.Summary.Cell><b>Total ${total}</b></Table.Summary.Cell>
          <Table.Summary.Cell colSpan={4} />
        </Table.Summary.Row>
      );

      const handleRemoveItem = (itemId) => {
        removeItem(itemId);
      };

    return (
        <>
            <Table
            pagination={false}
            columns={[
            {
                title: "Title",
                dataIndex: "title",
            },
            {
                title: "Price",
                dataIndex: "price",
                render: (value) => {
                return <span>${value}</span>;
                },
            },
            {
                title: "Quantity",
                dataIndex: "quantity"
            },
            {
                title: "Sub-Total",
                dataIndex: "subTotal",
                render: (value) => {
                return <span>${value}</span>;
                },
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                <Popconfirm
                    title="Are you sure you want to remove this item?"
                    onConfirm={() => handleRemoveItem(record.id)}
                >
                    <Button danger="true" size="small">
                    Remove
                    </Button>
                </Popconfirm>
                ),
            },
            ]}
            dataSource={cart}
            rowKey="id"
            summary={tableSummary}
            />
            <Button disabled={totalQuantity === 0}
                onClick={() => {
                setCheckoutDrawerOpen(true);
                }}
                type="primary"
            >Checkout Your Cart</Button>
            <Drawer
                open={checkoutDrawerOpen}
                onClose={() => {
                setCheckoutDrawerOpen(false);
                }}
                title="Confirm Order"
            >
                <Checkout />
            </Drawer>
      </>
    )
};

export default Cart