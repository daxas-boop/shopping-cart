import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = styled.header`
  width:100%;
  background-color:#D5AF9A;
  height:64px;
  display:flex;
  align-items:center;
  position: fixed;
  z-index: 1;
`

const Nav = styled.nav `
  flex-grow:1;
  text-align:center;
`

const NavLink = styled(Link) `
  text-decoration:none;
  color:white;
  margin:0 15px;
  padding:5px;
  font-size:24px;
  font-family:Roboto;
  &:hover{
    color:#AD6B48;
  }
`

const CartIcon = styled(FontAwesomeIcon) `
  color:white;
  margin-right:20px;
  &:hover{
    color:#AD6B48;
    cursor:pointer;
  }
`

const NavBar = () => {
  return (
    <Header>
      <Nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='shop'>
          Shop
        </NavLink>
      </Nav>
      <Link to='/cart'>
        <CartIcon icon={faShoppingCart} size='lg' ></CartIcon>
      </Link>
    </Header>
  );  
}

export default NavBar