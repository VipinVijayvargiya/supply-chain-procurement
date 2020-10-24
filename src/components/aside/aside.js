import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import { BrowserRouter as Link } from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {GitHub, ChevronLeft, Group, AddCircleOutline, Payment, AddIcCall} from '@material-ui/icons';
import sidebar from './sidebar-data';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    console.log(sidebar)
    return (
        <ProSidebar
            image={image ? 'sidebarBg' : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                >
                    sidebarTitle
                </div>
            </SidebarHeader>
            <SidebarContent>
                {/* <Menu iconShape="circle">
                    {sidebar.data.map((obj)=>{
                        return (
                            
                                
                                    <MenuItem
                                        icon={<ChevronLeft />}
                                        
                                        suffix={<span className="badge red">new</span>}
                                    >
                                        <Link to={obj.redirectTo} key={obj.name}>{obj.name}</Link>
                                        
                                    </MenuItem>
                                
                        )
                    })}
                </Menu> */}
                
                {/* <Menu iconShape="circle">
          <MenuItem
            icon={<ChevronLeft />}
            suffix={<span className="badge red">new</span>}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<ChevronLeft />}> components</MenuItem>
        </Menu> */}

        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'withSuffix'}
            icon={<Group />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'withPrefix'}
            icon={<Group />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title={'multiLevel'} icon={<Group />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`$submenu 3`}>
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title={`$submenu 3.3`}>
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper">
          <a
            href="https://github.com/vipinvijayavargiya/supply-chain-procurement"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <GitHub />
            <span>viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;