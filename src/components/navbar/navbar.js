import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  NavLink,
} from "react-bootstrap";

import "./navbar.css";

import logo from "../images/mountainwater.png";

import HomePage from "../mainPages/homePage";
import ViewProducts from "../mainPages/ViewProducts";

let links = [
  {
    to: "/",
    name: "Home",
    exact: true,
    disabled: false,
    element: <HomePage />,
  },
  {
    to: "/homePage",
    name: "Home",
    exact: true,
    disabled: false,
    element: <HomePage />,
  },
  {
    to: "/home",
    name: "Home",
    exact: true,
    disabled: false,
    element: <HomePage />,
  },
  {
    to: "/Matts_Final_Project",
    name: "Home",
    exact: true,
    disabled: false,
    element: <HomePage />,
  },
  {
    to: "/about-us",
    name: "About Us",
    exact: true,
    disabled: true,
  },
  {
    to: "/view-products",
    name: "View Products",
    exact: true,
    disabled: false,
    element: <ViewProducts />,
  },
  {
    to: "/reviews",
    name: "Reviews",
    exact: true,
    disabled: false,
    displayInDropdown: true,
  },
  {
    to: "/play-a-game",
    name: "Play A Game",
    exact: true,
    disabled: false,
    displayInDropdown: true,
  },
  {
    to: "/cart",
    name: "View Cart",
    exact: true,
    disabled: false,
    displayInDropdown: true,
  },
];

class Navibar extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="row">
          <div className="col-md-12">
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
                    {/* Iterate through multiple nav-links - BEGIN */}

                    {links.map((link, index) => {
                      return (
                        // if displayInDropdown is true, then don't display here, use ternary operator
                        link.displayInDropdown ? (
                          ""
                        ) : (
                          <NavLink
                            key={index}
                            disabled={link.disabled}
                            to={link.to}
                          >
                            {link.name}
                          </NavLink>
                        )
                      );
                    })}

                    {/* Iterate through multiple nav-links - END */}

                    <NavDropdown title="Site Content" id="basic-nav-dropdown">
                      <NavDropdown.Item to="/view-products">
                        View Products
                      </NavDropdown.Item>
                      <NavDropdown.Item to="/reviews">Reviews</NavDropdown.Item>
                      <NavDropdown.Item to="/play-a-game" disabled>
                        Play A Game
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Button variant="outline-primary">
                    {" "}
                    <Nav.Link to="/cart">View Cart</Nav.Link>
                  </Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <br />
          </div>
        </div>
        {/* routes iteration */}
        <Routes>
          {links.map((link, index) => {
            return <Route key={index} path={link.to} element={link.element} />;
          })}
        </Routes>
        {/* routes iteration */}
      </Router>
    );
  }
}

export default Navibar;
