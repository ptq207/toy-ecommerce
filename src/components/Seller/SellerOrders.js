import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { loadSellerOrders } from "../../store/actions/sellerOrders"

import { config } from '../../services/config';
import MySpinner from "../MySpinner";
import { Redirect } from "react-router-dom";
import OrderItem from "./SellerOrderItem";

import ReactPaginate from 'react-paginate';
import SideBar from "./SellerSideBar";

const SellerOrders = ({
  orders: { isLoading, orders, error },
  loadSellerOrders
}) => {

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    loadSellerOrders(1, {
      _page: 1,
      _limit: config.pageSize,
    });
    setPageCount(12);
  }, []);

  const handlePageClick = async (data) => {
    const pageNumber = data.selected + 1

    loadSellerOrders(1, {
      _page: pageNumber,
      _limit: config.pageSize
    });
    setCurrentPage(pageNumber)
  }

  const approveOrder = async (event, orderId) => {
    console.log("ORDER_ID", orderId);
  }

  if (error) return <Redirect to={'/error'} />
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <SideBar />
        </div>
        <div className="col">
          <h2>Orders</h2>
          {alert}
          <table className="table">
            <thead>
              <tr>
                <th>Order ID #</th>
                <th>Payment method</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Total price</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {orders !== null && orders
                .sort((a, b) => a.id < b.id)
                .map((order) => <OrderItem order={order} />)}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            forcePage={currentPage - 1}
          />
        </div>
      </div>

    </div>
  );
}

export default connect(
  state => ({
    orders: state.sellerOrdersReducer
  }),
  { loadSellerOrders }
)(SellerOrders);