import '../../Index.css'
import CartWidget from "../CardWidget/CartWidget"
import { Menu } from 'antd'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const items = [
    {
      label: 'Products',
      key: 'product',
      children: [
        {
          label: "All",
          key: "all",
        },
        {
          label: "Electronics",
          key: "electronics",
        },
        {
          label: "Jewelery",
          key: "jewelery",
        },
        {
          label: "Men's clothing",
          key: "men's clothing",
        },
        {
          label: "Women's clothing",
          key: "women's clothing",
        }
      ]      
    }
  ];

const NavBar = () => {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/category/${item.key}`);
  };

    return (
        // <nav className='NavBar'>
        //   <Link to='/'>
        //     <h3>Ecommerce</h3>
        //   </Link>
        //   <div className='Categories'>
        //     <NavLink to={'/category/electronics'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronics</NavLink>
        //     <NavLink to={'/category/jewelery'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jewelery</NavLink>
        //     <NavLink to={"/category/men's clothing"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Men's clothing</NavLink>
        //     <NavLink to={"/category/women's clothing"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Women's clothing</NavLink>
        //   </div>
        //   <CartWidget />
        // </nav>
        <div className="nav-bar">
          <Menu mode="horizontal" items={items} onClick={onMenuClick} />
          <Typography.Title>My ECommerce</Typography.Title>
          <CartWidget/>


             {/* <Title>Online Shopping Center</Title>
             <Menu mode="horizontal" items={items} />
             <br/>
             <CartWidget/> */}
        </div>
    )
}

export default NavBar