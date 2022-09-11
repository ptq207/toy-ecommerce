import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

import Badge from 'react-bootstrap/Badge';

import { GoogleLogout } from 'react-google-login';

import {
  setSortBy,
  setFilterBy,
  setPageToLoad,
} from '../../store/actions/header';
import { loadProducts } from '../../store/actions/products';
import {
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
} from '../../store/actions/auth';
import { config } from '../../services/config';

import './styles.css';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const NavBar = ({
  auth,
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
}) => {

  function logoutSuccess() {
    logOutGoogleUser();
  }

  function logoutLocalUserClick() {
    logoutLocalUser();
  }

  function getCurrentUser() {
    let user = null;
    user = auth.googleUser ? 'google' : auth.localUser ? 'local' : null;
    return user;
  }

  return (
    <Navbar
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {!getCurrentUser() ? (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fa fa-sign-in"></i> Log in
                </Nav.Link>
              </LinkContainer>
            ) : (
              <NavDropdown
                title={
                  <>
                    <i className="fa fa-user"></i> <span>Logged in</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <div
                    className="row"
                    style={{ minWidth: '15rem', maxHeight: '4rem' }}
                  >
                    <div className="col-lg-3 col-2 img-container">
                      <img
                        src={
                          getCurrentUser() === 'google'
                            ? auth.googleUser.imageUrl
                            : require(`../../static/products/mepps1.jpg`)
                        }
                        className="user-img"
                      />
                    </div>
                    <div className="col-lg-9 col-10 text-left">
                      <p className="">
                        <strong>
                          {getCurrentUser() === 'google'
                            ? auth.googleUser.name
                            : auth.localUser.name}
                        </strong>
                      </p>
                      <p className="small">
                        {getCurrentUser() === 'google'
                          ? auth.googleUser.email
                          : auth.localUser.email}
                      </p>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {getCurrentUser() === 'google' ? (
                  <GoogleLogout
                    clientId={config.clientId}
                    buttonText="Logout"
                    onLogoutSuccess={logoutSuccess}
                    render={renderProps => (
                      <>
                        <LinkContainer to="/profile">
                          <NavDropdown.Item className="text-center">
                            Profile
                          </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          className="text-center"
                          onClick={renderProps.onClick}
                        >
                          Google log out
                        </NavDropdown.Item>
                      </>
                    )}
                  />
                ) : (
                  <>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item className="text-center">
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className="text-center"
                      onClick={logoutLocalUserClick}
                    >
                      Local log out
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect(
  state => ({
    header: state.headerReducer,
    liked: state.likedReducer,
    cart: state.cartReducer,
    auth: state.authReducer,
  }),
  {
    setSortBy,
    setFilterBy,
    setPageToLoad,
    loadProducts,
    getGoogleUser,
    logOutGoogleUser,
    getLocalUser,
    logoutLocalUser,
  },
)(withRouter(NavBar));