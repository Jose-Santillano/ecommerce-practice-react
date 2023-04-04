import React, { useContext } from 'react';

//CSS.
import '../styles/components/Products.css';

//Components.
import Product from './Product';

//Context.
import AppContext from '../context/AppContext';

const Products = () => {

    const { state, addToCart } = useContext(AppContext);

    const { products } = state;

    //Función agregar carrito.
    const handleAddToCart = product => {
        addToCart(product);
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => {
                        return <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    })
                }
            </div>
        </div>
    );
}

export default Products;