import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Additional import
import clsx from 'clsx';
import { AppBar, Box, CssBaseline, Container, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from '@material-ui/core';
import { Assignment, ChevronLeft, Group, Menu as MenuIcon, AddCircleOutline, Payment, AddIcCall } from '@material-ui/icons';

//project import
import SearchProduct from "./pages/searchProduct/searchProduct";
import ProductDetails from "./pages/productDetails/productDetails";
import Onboard from "./pages/onboard/onboard";
import Header from './components/header/header';
import Footer from './components/footer/footer';

import { useStyles } from './common-utility/index.js';
import './App.scss';
import {
  ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent
} from 'react-pro-sidebar';
// import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import ShopIcon from '@material-ui/icons/Shop';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(window.innerWidth >= 768);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [searchCriteria, setSearchCriteria] = React.useState('');

  const handleChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions.bind(this));
  }, []);
  
  const updateDimensions=()=>{
    setOpen(window.innerWidth >= 768);
  }

  // const NavRoute = ({exact, path, component: Component}) => (
  //   <Route exact={exact} path={path} render={(props) => (
  //     <Component {...props}/>
  //   )}/>
  // )
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
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Products Catalog
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Search</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={searchCriteria}
                onChange={handleChange}
                label="SearchCriteria"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value={10}>Catalog</MenuItem>
                {/* <MenuItem value={20}>Suppliers</MenuItem>
                <MenuItem value={30}>Contracts</MenuItem> */}
              </Select>
            </FormControl>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by part #, supplier name or keyword"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* <IconButton color="inherit"> */}
            <Header />
            {/* </IconButton> */}
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
            <ProSidebar
              // image={image ? sidebarBg : false}
              // rtl={rtl}
              // collapsed='false'
              toggled='false'
              breakPoint="md"
            // onToggle={handleToggleSidebar}
            >
              <SidebarHeader>
                <div
                  style={{
                    padding: '14px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  SHOP BY CATEGORY
              </div>
              </SidebarHeader>

              <SidebarContent>
                <Menu iconShape="circle">
                  <SubMenu
                    // suffix={<span className="badge yellow">3</span>}
                    title='Admin Services'
                    icon={<ShopIcon color="secondary" />}
                  >
                    <SubMenu title="Printer">
                      <MenuItem>Catridges</MenuItem>
                      <MenuItem>Cables</MenuItem>
                    </SubMenu>
                    <SubMenu title="Stationery">
                      <MenuItem>Markers</MenuItem>
                      <MenuItem>WhiteBoard</MenuItem>
                      <MenuItem>Pages</MenuItem>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu
                    // suffix={<span className="badge gray">3</span>}
                    title='IT'
                    icon={<ShopIcon color="secondary" />}
                  >
                    <SubMenu title="Hardware">
                      <MenuItem>Laptop Screen</MenuItem>
                      <MenuItem>Batteries</MenuItem>
                      <MenuItem>Mouse</MenuItem>
                    </SubMenu>
                    <SubMenu title="Software">
                      <MenuItem>MS Office</MenuItem>
                      <MenuItem>McAfee</MenuItem>
                    </SubMenu>
                  </SubMenu>
                </Menu>
              </SidebarContent>
              <Divider />
              <SidebarHeader>
                <div
                  style={{
                    padding: '14px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  SHOP BY
              </div>
              </SidebarHeader>

              <SidebarContent>
                <Menu iconShape="circle">
                  <SubMenu
                    // suffix={<span className="badge yellow">3</span>}
                    title='Supplier'
                    icon={<ShopIcon color="secondary" />}
                  >
                    <MenuItem>Jabra Connect</MenuItem>
                    <MenuItem>Sysnet Global</MenuItem>
                    <MenuItem>Axis Global</MenuItem>
                  </SubMenu>
                  <SubMenu
                    // suffix={<span className="badge gray">3</span>}
                    title='Contract'
                    icon={<ShopIcon color="secondary" />}
                  >
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                  </SubMenu>
                </Menu>
              </SidebarContent>

            </ProSidebar>
          </Drawer>
          {/* <Drawer
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
                <ListItemText primary="SearchProduct" />
              </ListItem>
            </Link>
            <Link to="/onboarding">
              <ListItem button>
                <ListItemIcon>
                  <AddCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Onboard" />
              </ListItem>
            </Link>
            <Link to="/payroll">
              <ListItem button>
                <ListItemIcon>
                  <Payment />
                </ListItemIcon>
                <ListItemText primary="Payroll" />
              </ListItem>
            </Link>
            <Divider />
            <div className="sidebar-footer">
              <ListSubheader inset>Contact Us</ListSubheader>
              <a href="tel:+4915124403260">
                <ListItem button>
                  <ListItemIcon>
                    <AddIcCall />
                  </ListItemIcon>
                  <ListItemText primary="predictions" />
                </ListItem>
              </a>
              <a href="mailto: vipinvijayvargiya@gmail.com">
                <ListItem button>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary="products" />
                </ListItem>
              </a>
            </div>

          </Drawer>
           */}
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={`main-container ${classes.container}`}>
              <Paper>
                <Switch>
                  <Route path="/" exact render={() => <SearchProduct classes={classes} />} />
                  <Route path="/checkout/:id/:action" exact component={ProductDetails} />
                  <Route path="/onboarding/" exact component={Onboard} />

                </Switch>
              </Paper>
              <Box pt={4}>
                <Footer />
              </Box>
            </Container>
          </main>
        </Router>
      </Provider>
    </div >
  );
}

export default App;
