import { useState } from 'react';
// Carrito de compras estado inicial vacio
const initialState = {
    cart: [],
    total: 0,
};

// Hook para obtener el estado inicial carrito de compras
const useInitialState = () => {
    const [state, setState] = useState(initialState);

    // Agregar producto al carrito
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
            // Total de productos
            total: state.total + payload.price,
        })
    }

    // Eliminar producto del carrito
    const removeFromCart = (payload, indexValue) => {
        setState({
            ...state,
        cart: state.cart.filter((product,index) => product.id !== payload && index != indexValue),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
    };
}

export default useInitialState;
