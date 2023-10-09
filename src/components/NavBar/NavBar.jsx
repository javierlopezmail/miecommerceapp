import CartWidget from "../CardWidget/CartWidget"
import { Menu } from 'antd'
import { Typography } from 'antd'

const { Title } = Typography

const items = [
    {
      label: 'Home',
      key: 'home'
    },
    {
      label: 'Products',
      key: 'producto'      
    },
    {
      label: 'Contact',
      key: 'contacto',
    }
  ];

const NavBar = () => {
    return (
        <>
            <Title>Online Shopping Center</Title>
            <Menu mode="horizontal" items={items} />
            <br/>
            <CartWidget/>
        </>
    )
}

export default NavBar