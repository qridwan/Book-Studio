import { IconButton, withStyles } from "@material-ui/core";
import React from "react";
import { Badge, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
const Navigation = () => {
  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">BOOK.STUDIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink to="/home">Home</NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/favorites">favorites</NavLink>{" "}
            </Nav.Link>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
