import React from 'react'
import './Navbar.css'
// import shopImage from './image/shopping.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'


function Navbar() {
    return (
        <nav className='header'>
            {/* <img className='header_logo' src='data:image/jpeg;base64,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' /> */}
            <h1>MGL</h1>

            {/* search box */}
            <div className='header_search'>
            <input type="text" className="searchInput"/>
            <SearchIcon className='header_searchIcon' />    
            </div>

            {/* basket */}
            <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            {/* No.Of Item */}
            <span className='basketCount'>0</span>
            </div>
        </nav>
    )
}

export default Navbar
