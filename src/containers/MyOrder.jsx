import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import {AppContext} from '../context/AppContext';


import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';
import iconClose from '@icons/icon_close.png';

//Productos en carrito de COMPRAS componente a usar <OrderItem />
const MyOrder = () => {
    const { state } = useContext(AppContext);

    // const sumTotal = () => {
    //     function reducer(accumulator, currentValue) {
    //         return accumulator + currentValue.price;
    //     }
    //     const sum = state.cart.reduce(reducer, 0);
    //     return sum;
    // }

    return (
        <aside className="product-detail">
            <div className="title-container">
              <img src={flechita} alt="arrow" />
              <p className="title">My order</p>
            </div>
    
            <div className="my-order-content">
               {state.cart.map((product, index) => (
                   <OrderItem product={product} index={index} key={index} />
               ))}

                <div className="order">
                    <p>
                      <span>Total</span>
                    </p>
                    <p>${state.total}.00</p>
                </div>

                <button className="primary-button">
                    Checkout
                </button>
              
            </div>
        </aside>
    );
}

export default MyOrder;
