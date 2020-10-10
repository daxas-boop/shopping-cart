import React, {useContext, useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ItemsContext } from './ItemsContext';

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

const NavLinkICon = styled(Link) `
  font-family:'Roboto';
  display:flex;
  align-items:center;
  text-decoration:none;
  color:white;
  margin-right:20px;
`

const CartIcon = styled(FontAwesomeIcon) `
  padding:5px;
  &:hover{
    color:#AD6B48 !important;
    cursor:pointer;
  }
`

const NavBar = () => {
  const [cartItems] = useContext(ItemsContext);
  const [iconColor, setIconColor] = useState('white')
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) { // in the first render will do nothing
      isFirstRun.current = false;
      return;
    }

    setIconColor('red')
    setTimeout(() => {
      setIconColor('white')
    }, 300);

  }, [cartItems])

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
      <NavLinkICon to='/cart'>
        <CartIcon 
          icon={faShoppingCart} 
          size='lg' 
          style={{color:iconColor}}
          ></CartIcon>
        <p>[{cartItems.length}]</p>
      </NavLinkICon>
    </Header>
  );  
}

export default NavBar