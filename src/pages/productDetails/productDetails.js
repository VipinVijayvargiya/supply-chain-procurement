import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductData from './prductData';
import { getsupplierData, handleFilterChange } from "../../redux/actions";

class ProductDetails extends Component {

  componentDidMount() {
    this.props.getsupplierData();
  }

  render () {
    const {supplierData, uniqueSupplier} = this.props;
    console.log(this.props.filterData);
    return (
      <div className="product-details-wrapper">
        <div className="filter-wrapper">
          <form>
            {uniqueSupplier.map((supName)=>
              <div >
                <label>
                  <input
                    name={supName}
                    type="checkbox"
                    checked={this.props.filterData[supName] === "on"}
                    onChange={(e)=>this.props.handleFilterChange(e)} />
                  {supName}
                </label>
              </div>
            )}
          </form>
        </div>
        <div className="product-data-wrapper">
          {supplierData.map((obj, index)=>{
            return <ProductData {...obj} key={`product-${index}`} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    supplierData: state.app.supplierData,
    uniqueSupplier: state.app.uniqueSupplier,
    filterData: state.app.filterData
  };
};
const mapDispatchToProps = {
  getsupplierData,
  handleFilterChange
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
