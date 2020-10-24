import React from 'react';
//import './loader.scss';
import { Card, Box, CssBaseline, Container, FormControl, MenuItem, InputLabel, InputBase, Select,  Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from '@material-ui/core';
import { Assignment, ChevronLeft, Group, Menu as MenuIcon, Search, AddCircleOutline, Payment, AddIcCall } from '@material-ui/icons';

const SearchToolbar = props => {
  return (
    <div className="search-bar-wrapper">
          <Typography component="h1" variant="h6" color="inherit" noWrap >
            Products Catalog
          </Typography>
          <FormControl variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">Search</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value=""
              label="SearchCriteria"
            >
              <MenuItem value={10}>Catalog</MenuItem>
            </Select>
          </FormControl>
          <div>
            <InputBase
              placeholder="Search by part #, supplier name or keyword"
              onChange={(e)=>{
                props.inputChanged(e)
              }}
            /><Search />
          </div>
        </div>
  )
}

export default SearchToolbar;
