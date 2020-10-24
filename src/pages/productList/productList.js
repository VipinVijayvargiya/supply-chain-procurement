import React, { Component } from "react";
import './productList.scss';
import { connect } from "react-redux";

class ProductList extends Component {
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        product list
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = {
  
};

const ConnectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

export default ConnectedProductList;