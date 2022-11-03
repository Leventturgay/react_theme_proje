import React from "react";
import "./Header.style";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";

const Header = ({ setQuery }) => {
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">ARAMA</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
