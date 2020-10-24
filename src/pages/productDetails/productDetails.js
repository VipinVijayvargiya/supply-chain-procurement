import React, { Component } from 'react';
import { connect } from "react-redux";

class ProductDetails extends Component {

  componentDidMount() {
  }

  render () {
    return (
      <div>
        productDetails
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
