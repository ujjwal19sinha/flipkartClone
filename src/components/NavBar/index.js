import React from 'react';
import { FaSearch} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './index.css';

const NavBar = () => {
    return (
        <nav>
            <div class="logo"><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" className="flipkart-logo" />
            </div><div>
                    <div  className='serach-box'>
                    <FaSearch/>
                    <input type="text" class="search" placeholder="Search for product Brand and More"/>
                    </div>
            </div>
            <div className='nav-right'>
                <div class="sell"><p>Become a Seller</p></div>
                <div>
                    <TiShoppingCart/>
                    <p>Cart</p>
                </div>

            </div>

        </nav>
    );
};

export default NavBar;
