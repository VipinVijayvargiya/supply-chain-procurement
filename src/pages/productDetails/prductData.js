import React from 'react';
import { Link } from "react-router-dom";
import './productData.scss'

const ProductData = props => {
    const {name, supplier, supplierPart, availableIn, price, currency, shipTo, sourcingSpoc, materialCode, additionalCharges} = props;
    return (
        <div className="product-data">
            <Link to={`/checkout/${name}`}>{name}</Link>
        </div>
    )
}

export default ProductData;
