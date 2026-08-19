import {NavLink} from 'react-router-dom'
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar-section'>
       <h1>TechStore</h1>
    <nav className='navbar'>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/products/:id">Products</NavLink>
       <NavLink to="/checkout">Checkout</NavLink>
    </nav>
    </div>
  )
}

export default Navbar;