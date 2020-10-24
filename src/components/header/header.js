import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarsIcon from '@material-ui/icons/Stars';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from "react-redux";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Header = (props) => {
  // console.log("props", props);
  // const classes = useStyles();
  return (
    <div className="header-wrapper">
      {/* <Tooltip title="My Account" arrow> */}
      <IconButton aria-label="My Account" color="inherit">
        <AccountCircleIcon />
      </IconButton>
      {/* </Tooltip> */}
      {/* <Badge color="secondary">
        <AccountCircleIcon />
      </Badge> */}
      <IconButton aria-label="My Account" color="inherit">
        <Badge badgeContent={props.badge} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={props.favorites} color="secondary">
          <StarsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <ExitToAppIcon />
      </IconButton>
      {/* // <Badge badgeContent={props.badge} color="secondary">
        //   <NotificationsIcon />    
    // </Badge> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    badge: state.app.badge,
    favorites: state.app.favorites

  };
};
const mapDispatchToProps = {

};

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;