import React, { Component } from "react";
import Loader from '../../components/loader/loader';
import './searchProduct.scss';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getProductData } from "../../redux/actions";
import { Edit, Delete } from '@material-ui/icons';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class SearchProduct extends Component {

  componentDidMount() {
    this.props.getProductData();
    console.log('List', this.props);
  }

  render() {
    const { productData } = this.props;
    console.log('this.props', this.props);
    const total_number_of_emp = productData ? productData.length : 0;

    console.log('productData', productData);
    return (
      <div className="emp-list-componnet" >
        { productData ? (
          <div>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {
                productData.map((product, index) => {
                  const { id } = product;
                  return (
                    <Grid item xs={12} sm={6} md={3} key={productData.indexOf(product)}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={product.name}
                            // height="100"
                            // width="100"
                            image={product.image}
                            title={product.name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {product.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Link to={`/checkout/${id}/details`}>
                            <Button size="small" variant="contained" color="secondary" >
                              Select Item
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  )
                }
                )}
            </Grid>
          </div>

        ) : <Loader />}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
    productData: state.app.productData
  };
};
const mapDispatchToProps = {
  getProductData
};

const ConnectedSearchProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProduct);

export default ConnectedSearchProduct;