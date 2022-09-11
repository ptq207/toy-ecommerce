import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { loadSellerProducts } from "../../store/actions/sellerProducts"

import { config } from '../../services/config';
import MySpinner from "../MySpinner";
import { Redirect } from "react-router-dom";
import ProductItem from "./SellerProductItem";

import ReactPaginate from 'react-paginate';
import SideBar from "./SellerSideBar";
import { Button } from "react-bootstrap";

const SellerProducts = ({
  products: { isLoading, products, error },
  loadSellerProducts,
  history
}) => {

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    loadSellerProducts(1, {
      _page: 1,
      _limit: config.pageSize,
    });
    setPageCount(12);
  }, []);

  const handlePageClick = async (data) => {
    const pageNumber = data.selected + 1

    loadSellerProducts(1, {
      _page: pageNumber,
      _limit: config.pageSize
    });
    setCurrentPage(pageNumber)
  }

  if (error) return <Redirect to={'/error'} />
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Button onClick={() => history.push('/sellercenter/products/create')}></Button>
        </div>
        <div className="col">
          <SideBar />
        </div>
        <div className="col">
          <h2>Products</h2>
          {alert}
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products
                .sort((a, b) => a.id < b.id)
                .map((p) => <ProductItem product={p} />)}
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
    products: state.sellerProductsReducer
  }),
  { loadSellerProducts }
)(SellerProducts);