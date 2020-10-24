import React, { Component } from 'react';
import { connect } from "react-redux";
import data from './productDetails-data.js';
import ProductData from './prductData';


class ProductDetails extends Component {

  componentDidMount() {
  }

  render () {
    console.log(data.supplier)
    return (
      <div>
        {data.supplier.map((obj, index)=>{
          return <ProductData {...obj} key={`product-${index}`} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
