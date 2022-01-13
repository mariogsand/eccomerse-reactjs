import React, { useContext } from 'react';
import {AppContext} from '@context/AppContext';
import '@styles/ProductItem.scss';
import addTocartImage from '@icons/bt_add_to_cart.svg';

//Componente de Lista de Productos <ProductList /> perteneciente al Main
const ProductItem = ({product}) => {
   const { addToCart } = useContext(AppContext);
   
   const handleClick = (item) => {
        addToCart(item);
    }   

    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>{product.title}</p>
                    <p>${product.price}.00</p>
                </div>
                <figure>
                    <img src={addTocartImage} onClick={() => handleClick(product)} alt="addTocartImage" />
                </figure>
            </div>
        </div>
    );
}


export default ProductItem;
