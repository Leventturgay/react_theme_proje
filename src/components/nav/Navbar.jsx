import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.style";
import Nav, { Brand, Menu } from "./Navbar.style";
import MenuLink from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>Turgay LEVENT </i>
        <span>/ Recipe</span>
      </Brand>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
