import React, { useContext } from 'react';
import {AppContext} from '@context/AppContext';
import '../styles/OrderItem.scss';

import iconClose from '@icons/icon_close.png';

// Componente item del carrito <MyOrder />
const OrderItem = ({product,index}) => {
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = product => {
        removeFromCart(product,index);
        
    }

    return (
        <div className="order-item">
            <figure>
              <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.title}</p>
            <img className='close-img' src={iconClose} alt="close" onClick={()=>handleRemove(product)} />
        </div>
    );
}

export default OrderItem;