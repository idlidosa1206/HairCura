import React, {useState} from 'react';
import './Navbar.css';
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu, setMenu]=useState("shop")

  return (
    <div className="navbar">
        <div className='nav-logo'>
            <img src= {logo}  width="110px" height="75px"alt="logo" />
            <p>HairCura</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("sham")}}><Link to='/sham' style={{textDecoration:'none'}}>Shampoos</Link>{menu==="sham"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("cond")}}><Link to='/cond' style={{textDecoration:'none'}}>Conditioners</Link>{menu==="cond"? <hr/>: <></>}</li>
            <li onClick={()=>{setMenu("style")}}><Link to='/style' style={{textDecoration:'none'}}>Styling</Link>{menu==="style"? <hr/>: <></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to ="/cart"><img src ={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar
