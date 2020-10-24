import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductData from './prductData';
import { getsupplierData } from "../../redux/actions";

class ProductDetails extends Component {

  componentDidMount() {
    this.props.getsupplierData();
  }

  render () {
    const {supplierData, uniqueSupplier} = this.props;
    console.log(this.props);
    return (
      <div className="product-details-wrapper">
        <div>
          {uniqueSupplier.map((supName)=>
            <div>
              {supName}
            </div>
          )}
        </div>
        {supplierData.map((obj, index)=>{
          return <ProductData {...obj} key={`product-${index}`} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    supplierData: state.app.supplierData,
    uniqueSupplier: state.app.uniqueSupplier
  };
};
const mapDispatchToProps = {
  getsupplierData
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
