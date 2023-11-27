import '../../Index.css'
import CartWidget from "../CardWidget/CartWidget"
import { Menu } from 'antd'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const items = [
  {
    label: 'All Products',
    key: 'all'
  },
  {
    label: 'Electronics',
    key: 'electronics'
  },
  {
    label: 'Jewelry',
    key: 'jewelry'
  },
  {
    label: "Men's",
    key: "men's clothing"
  },
  {
    label: "Women's",
    key: "women_clothing"
  }
];
 
const NavBar = () => {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/category/${item.key}`);
  };

    return (
        <div className="nav-bar">
          <Menu mode="horizontal" items={items} onClick={onMenuClick} />
          <Typography.Title level={2}>My ECommerce</Typography.Title>
          <CartWidget/>
        </div>
    )
}

export default NavBar