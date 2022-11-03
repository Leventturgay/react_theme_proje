import React, { useState } from "react";
import Nav, { Menu, Brand, MenuLink, Hamburger } from "./Navbar.style";
import "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="">
        <i> {"<TURGAY LEVENT/>"} </i>
        <span>Yemek</span>
      </Brand>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/Logout" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
