import './NavBar.css'
import CartWidget from "../CardWidget/CartWidget"
import { Menu } from 'antd'
import { Typography } from 'antd'
import { NavLink, Link } from 'react-router-dom'

const { Title } = Typography

// const items = [
//     {
//       label: 'Home',
//       key: 'home'
//     },
//     {
//       label: 'Products',
//       key: 'producto'      
//     },
//     {
//       label: 'Contact',
//       key: 'contacto',
//     }
//   ];

const NavBar = () => {
    return (
        <nav className='NavBar'>
          <Link to='/'>
            <h3>Ecommerce</h3>
          </Link>
          <div className='Categories'>
            <NavLink to={'/category/electronics'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronics</NavLink>
            <NavLink to={'/category/jewelery'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jewelery</NavLink>
            <NavLink to={"/category/men's clothing"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Men's clothing</NavLink>
            <NavLink to={"/category/women's clothing"} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Women's clothing</NavLink>
          </div>
          <CartWidget />
        </nav>
        // <>
        //     <Title>Online Shopping Center</Title>
        //     <Menu mode="horizontal" items={items} />
        //     <br/>
        //     <CartWidget/>
        // </>
    )
}

export default NavBar