import { IconButton } from "@material-ui/core";
import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
const Navigation = ({ favorites }) => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand>
          <NavLink className="no-underline text-dark fw-bolder" to="/home">
            BOOK.STUDIO
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="m-auto">
            <Nav.Link>
              <NavLink className="no-underline h6" to="/home">
                <IconButton aria-label="home">
                  <StyledBadge color="secondary">
                    Home <HomeIcon className="text-dark" />
                  </StyledBadge>
                </IconButton>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="no-underline h6" to="/home/favorites">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={favorites.length}
                    color="secondary"
                  >
                    Favorites <FavoriteIcon className="text-dark" />
                  </StyledBadge>
                </IconButton>
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Navigation);
