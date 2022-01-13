import React from 'react';
import '../styles/ProductDetail.scss';
import ProductInfo from '../components/ProductInfo';

import iconClose from './icons/icon_close.png';


const ProductDetail = () => {
    return (
        <aside class="ProductDetail">
            <div class="ProductDetail-close">
              <img src={iconClose} alt="close" />
            </div>
            {/* <ProductInfo /> Modal info al darle click */}
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;

