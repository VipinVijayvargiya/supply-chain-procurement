import React from 'react';
//import './loader.scss';
import { Card, Box, CssBaseline, Container, FormControl, MenuItem, InputLabel, InputBase, Select,  Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography } from '@material-ui/core';
import { Assignment, ChevronLeft, Group, Menu as MenuIcon, Search, AddCircleOutline, Payment, AddIcCall } from '@material-ui/icons';

const SearchToolbar = props => {
  return (
    <div className="search-bar-wrapper ">
          <div className="catlog">Products Catalog</div>
          <div className="custom-search">
            <InputLabel id="demo-simple-select-outlined-label">Search</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value="Catalog"
              label="SearchCriteria"
              disabled
            >
              <MenuItem value="Catalog">Catalog</MenuItem>
            </Select>
          </div>

          <div className="custom-search custom-search--input">
            <InputBase
              placeholder="Search keyword"
              onChange={(e)=>{
                props.inputChanged(e)
              }}
            />
          </div>
        </div>
  )
}

export default SearchToolbar;
