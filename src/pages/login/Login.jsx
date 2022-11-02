import React from "react";
import {
  Formcontainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userInfo = {
    username: "Admin",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };

  return (
    <LoginContainer>
      <Formcontainer>
        <StyledImg src={meal} />
        <Header>{"<LT/>"}YEMEK</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Adınız - Soyadınız" type="text" />
          <StyledInput placeholder="Şifreniz" type="password" />
          <StyledButton type="submit">GİRİŞ</StyledButton>
        </StyledForm>
      </Formcontainer>
    </LoginContainer>
  );
};

export default Login;
