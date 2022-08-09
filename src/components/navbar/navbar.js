import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

import "./navbar.css";

import logo from "../images/mountainwater.png";

import HomePage from "../mainPages/homePage";
import ViewProducts from "../mainPages/ViewProducts";
import Reviews from "../mainPages/reviews";
import ViewCart from "../mainPages/ViewCart";
import ProductDetails from "../mainPages/ProductDetails";

class Navibar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <br />
              <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                sticky="top"
                id="myNav"
              >
                <Container>
                  <Navbar.Brand>
                    <span>
                      {" "}
                      <img id="siteLogo" alt="" src={logo} />{" "}
                      <span id="siteLogoTitle">Yak-Yak!</span>
                    </span>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/homePage">Home</Nav.Link>
                      <Nav.Link href="/about-us" disabled>
                        About Us
                      </Nav.Link>
                      <NavDropdown title="Site Content" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/view-products">
                          View Products
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/reviews">
                          Reviews
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/play-a-game" disabled>
                          Play A Game
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Button variant="outline-primary">
                      {" "}
                      <Nav.Link href="/cart">View Cart</Nav.Link>
                    </Button>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
              <Routes>
                <Route exact path="/homePage" element={<Navigate to="/" />} />
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/view-products" element={<ViewProducts />} />
                <Route
                  exact
                  path="Matts_Final_Project/reviews/"
                  element={<Reviews />}
                />
                <Route
                  exact
                  path="Matts_Final_Project/cart/"
                  element={<ViewCart />}
                />
                <Route
                  exact
                  path="Matts_Final_Project/matts-final-project/"
                  element={<Navigate to="/homePage" />}
                />
                <Route
                  exact
                  path="Matts_Final_Project/kayak-1/"
                  element={<ProductDetails />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Navibar;
