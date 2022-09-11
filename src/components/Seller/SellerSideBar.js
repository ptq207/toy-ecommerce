import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

import './styles.css';

const SideBar = () => {
  return (
    <ProSidebar className='side-bar'>
      <SidebarHeader>
        <div
          style={{
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
          Seller center
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem>
          Products
          <Link to="/sellercenter/products" />
        </MenuItem>
        <MenuItem>
          Orders
          <Link to="/sellercenter/orders" />
        </MenuItem>
        <MenuItem>
          Seller info
          <Link to="/products" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default SideBar;