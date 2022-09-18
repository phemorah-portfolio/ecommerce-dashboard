import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  function logout(){
    localStorage.clear()
    navigate("/login")
  }

  let user = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/">Ecommerce Dashboard</Link>
            {
              user ?
              <>
                <Link to="/">All Products</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }
            <Link to="/search">Search Products</Link>
          </Nav>
          <Nav>
            {
              user ?
                <NavDropdown title={user.name}>
                  <NavDropdown.Item onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              :
                <></>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
