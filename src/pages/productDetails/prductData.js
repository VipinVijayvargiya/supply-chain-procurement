import React from 'react';
import { Link } from "react-router-dom";
import './productData.scss'
import Button from '@material-ui/core/Button';

const ProductData = props => {
    
    const {name, supplier, supplierPart, availableIn, price, currency, shipTo, sourcingSpoc, materialCode, additionalCharges} = props;
    return (
        <div className="product-data">
            <Link to={`/checkout/${name}`}>{name}</Link>
            <div>supplier: {supplier}</div>
            <div>supplierPart: {supplierPart}</div>
            <div>availableIn: {availableIn}</div>
            <div>price: {price}</div>
            <div>shipTo: {shipTo}</div>
            <Button size="small" variant="contained" color="secondary" >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductData;
