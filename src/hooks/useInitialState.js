import { useState } from 'react';
import initialState from '../initialState';

//Custom hook para actualizar el estado. (agregar y quitar del carrito)
const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    }
};

export default useInitialState;
