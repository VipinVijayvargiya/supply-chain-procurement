import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Menu, ChevronLeft, Group, AddCircleOutline, Payment, AddIcCall} from '@material-ui/icons';


import SearchProduct from "./pages/searchProduct/searchProduct";
import ProductDetails from "./pages/productDetails/productDetails";
import Onboard from "./pages/onboard/onboard";
import Header from './components/header/header';
import Footer from './components/footer/footer';

import {useStyles} from './common-utility/index.js';

//import Switch from 'react-switch';
//import { FaHeart, FaBars } from 'react-icons/fa';
// /import reactLogo from './assets/logo.svg';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
    const classes = useStyles();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <Menu />
      </div>
      <header className="logo-wrapper">
        <img className="nestle-logo" src="https://www.nestle.com/themes/custom/da_vinci_code/logo.png" alt="nestle" />
      </header>
      <div>
            <Switch>
                <Route path="/" exact render={()=><SearchProduct classes={classes}/>} />
                <Route path="/checkout/:id/:action" exact component={ProductDetails} />
                <Route path="/onboarding/" exact component={Onboard} />

            </Switch>
      </div>
      <div onClick={() => handleCollapsedChange(!collapsed)} >hello clone the side bar</div>
      <footer>
        <small>
          ©2020 developed for hackathon
        </small>
      </footer>
    </main>
  );
};

export default Main;