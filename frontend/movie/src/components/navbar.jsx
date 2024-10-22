import React, { useContext } from 'react';
import { CartContext } from './cartcontext';  
import { useNavigate, NavLink  } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import carticon from './images/carticon.png';
import logout from './images/logout.png';
import home from './images/home.png';

function NavBar({ setSearchQuery, onLogout }) {  
  const { cartCount } = useContext(CartContext);  
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();  
    navigate('/login');  
  };

  return (
    <div className='container-fluid'>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ width: '100%' }}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto my-2" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink to="/" className="mx-lg-5 text-dark nav-item">
              <img src={home} alt='home' style={{ width: '23px', height: '23px' }} />
            </NavLink>

            <NavLink to="/cart" className='mx-lg-5 text-dark nav-item' style={{ position: 'relative' }}>
              <img src={carticon} alt='shopping cart' style={{ width: '23px', height: '23px' }} />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </NavLink>

            <NavLink to="#" onClick={handleLogout} className='mx-lg-5 text-dark nav-item'>
              <img src={logout} alt='logout' style={{ width: '23px', height: '23px' }} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
