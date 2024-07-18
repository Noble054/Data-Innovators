import React, { useState } from 'react';
import './Navbar.css';
import log2 from '../Assets/log2.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
    <div className="Navbar">
        <div className="nav-logo">
            <img src={log2} alt="" />
            <p> SHOPPER</p>
        </div>
        <ul className=" nav-menu">
                <li onClick={() => {setMenu("Shop")}}><Link style={{textDecoration: 'none '}} to='/'>Shop</Link> {menu ==="shop"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none '}} to='mens'>Men</Link> {menu ==="mens"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none '}} to='womens'>womens</Link>{menu ==="womens"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none '}} to='kids'>Kids</Link> {menu ==="kids"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("Bags")}}><Link style={{textDecoration: 'none '}} to='Bags'>Bags</Link> {menu ==="Bags"?<hr/>:<></>} </li>
                <li onClick={() => { setMenu("shoes") }}><Link style={{ textDecoration: 'none ' }} to='Shoes'>Shoes</Link>{menu === "shoes" ? <hr /> : <></>} </li>
                <li onClick={() => {setMenu("Blogs")}}><Link style={{textDecoration: 'none '}} to='Blogs'>Blogs</Link>{menu ==="Blogs"?<hr/>:<></>} </li>
        </ul>
            <div className=" nav-login-cart">
               <Link to='/login'><button>Login</button></Link>
               <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
            </div>
            <div className=" nav-cart-count">0</div>
    </div>
    );
}

export default Navbar;