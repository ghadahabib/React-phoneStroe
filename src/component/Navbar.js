
import {React, Component} from 'react';
import {Link} from'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { CustmBtn } from './Buttons';

export default class Navbar extends Component {
render() {
    return (
     <NavbarWrapper className="navbar sticky-top"> 
     <div className='container'>
        <Link to="/" >
          <img src={logo} alt="Store" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav flex-fill">
          <li className="nav-item">
            <Link to="/" className="nav-link section-title">products</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <CustmBtn>
            <span className="me-3">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            my cart
          </CustmBtn>
        </Link>
     </div>
     </NavbarWrapper>
    )
  }
};

//style
 const NavbarWrapper = styled.nav`
 background : var(--main-color);
 .navbar-brand{
  @media (max-width: 575.98px) { 
    margin-right:.5rem!important;
   }
 }
 .nav-link{
   color : var(--main-white);
   font-size : 1.3rem;
   text-transform : capitalize;
   @media (max-width: 575.98px) { 
     font-size:1.2rem;
     letter-spacing : -.01px;
    }
 }
 `

