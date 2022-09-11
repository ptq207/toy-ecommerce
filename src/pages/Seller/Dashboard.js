import React from 'react';
import SideBar from "../../components/Seller/SellerSideBar";
import NavBar from "../../components/Seller/SellerNavBar";
import Orders from '../../components/Seller/SellerOrders';
import Products from '../../components/Seller/SellerProducts';

import "./styles.css";
import { Route, Switch } from 'react-router-dom';


const SellerDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <SideBar />
        </div>
        <div className="col">
        <Switch>
          <Route path="/sellercenter/orders" exact component={Orders} />
          <Route path="/sellercenter/products" exact component={Products} />
        </Switch> 
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;