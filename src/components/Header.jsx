import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//CSS.
import '../styles/components/Header.css';

//Context.
import AppContext from '../context/AppContext';

const Header = () => {
    const { state } = useContext(AppContext);

    const { cart } = state;

    return (
        <div className="Header">
            <h1 className='Header-title'>
                <Link to='/'>Ecommerce React</Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fa-solid fa-basket-shopping"></i>
                </Link>
                {
                    cart.length > 0 && <div className='Header-alert'>{ cart.length }</div>
                }
            </div>
        </div>
    );
}

export default Header;