import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Additional import
import clsx from 'clsx';
import {AppBar, Box, CssBaseline, Container, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography} from '@material-ui/core';
import {Assignment, ChevronLeft, Group, Menu, AddCircleOutline, Payment, AddIcCall} from '@material-ui/icons';

//project import
import ProductList from "./pages/productList/productList";
import ProductDetails from "./pages/productDetails/productDetails";
import Onboard from "./pages/onboard/onboard";
import Header from './components/header/header';
import Footer from './components/footer/footer';

import {useStyles} from './common-utility/index.js';
import './App.scss';

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(window.innerWidth >= 768);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={`supply-chain ${classes.root}`}>
      <Provider store={store}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <Menu />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Welcome
            </Typography>
            <IconButton color="inherit">
              <Header />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Router>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft />
              </IconButton>
            </div>
            <Divider />
              <Link to="/">
                <ListItem button>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/page1">
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleOutline />
                  </ListItemIcon>
                  <ListItemText primary="Page 1" />
                </ListItem>
              </Link>
              <Link to="/page2">
                <ListItem button>
                  <ListItemIcon>
                    <Payment />
                  </ListItemIcon>
                  <ListItemText primary="Page 2" />
                </ListItem>
              </Link>
              <Divider />
              <div className="sidebar-footer">
                <ListSubheader inset>Contact Us</ListSubheader>
                <a href="tel:+1234567890">
                  <ListItem button>
                    <ListItemIcon>
                      <AddIcCall />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </a>
                <a href="mailto: test@gmail.com">
                  <ListItem button>
                    <ListItemIcon>
                      <Assignment />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                  </ListItem>
                </a>
              </div>
            
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />

            <Container maxWidth="lg" className={`main-container ${classes.container}`}>
              <Paper>
              <Switch>
                <Route path="/" exact render={()=><ProductList classes={classes}/>} />
                <Route path="/page1" exact component={ProductDetails} />
                <Route path="/page2/" exact component={Onboard} />
              </Switch>
              </Paper>
              <Box pt={4}>
                <Footer />
              </Box>
            </Container>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
