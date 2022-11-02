import React from "react";
import Nav, { Menu, Brand, MenuLink, Hamburger } from "./Navbar.style";
import "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="">
        <i> {"<TURGAY LEVENT/>"} </i>
        <span>Yemek</span>
      </Brand>
      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/Logout">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
