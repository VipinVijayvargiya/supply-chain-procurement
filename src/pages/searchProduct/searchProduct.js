import React, { Component } from "react";
import Loader from '../../components/loader/loader';
import './searchProduct.scss';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductData, searchProductbyQuery } from "../../redux/actions";
import { Edit, Delete } from '@material-ui/icons';
import SearchToolbar from '../../components/search-toolbar/search-toolbar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import Grid from '@material-ui/core/Grid';
import { Card, Box, CssBaseline, Container, FormControl, MenuItem, InputLabel, InputBase, Select,  Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from '@material-ui/core';
import { Assignment, ChevronLeft, Group, Menu as MenuIcon, Search, AddCircleOutline, Payment, AddIcCall } from '@material-ui/icons';


class SearchProduct extends Component {

  componentDidMount() {
    this.props.getProductData();
    console.log('List', this.props);
  }

  inputChanged=(e)=>{
    this.props.searchProductbyQuery(e);
  }

  render() {
    const { productData, serachedProduct } = this.props;
    console.log('this.props', this.props);
    
    return (
      <div className="search-product-wrapper" >
        <SearchToolbar inputChanged={(e)=>this.inputChanged(e)}/>
        {serachedProduct && (<div className="section-wrap">
          <h2>Result for your query</h2>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
          {
            serachedProduct.map((product, index) => {
              const { id } = product;
              return (
                <Grid item xs={12} sm={6} md={3} key={serachedProduct.indexOf(product)}>
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
        </div>)}
        { productData ? (
          <div className="section-wrap">
            <h2>Preveiosly Ordered Data</h2>
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
    productData: state.app.productData,
    serachedProduct: state.app.serachedProduct
  };
};
const mapDispatchToProps = {
  getProductData,
  searchProductbyQuery
};

const ConnectedSearchProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProduct);

export default ConnectedSearchProduct;