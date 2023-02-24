import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActionTypes } from "../../store/register/registerReducer";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (e) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email.includes("@") && formState.password.length > 8) {
      dispatch({
        type: authActionTypes.LOGIN,
        email: formState.email,
        password: formState.password,
      });
      navigate("/todos");
    }
  };
  return (
    <LoginPageStyle>
      <FormStyle>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <LoginFormStyle
            type="email"
            id="email"
            placeholder="Enter your email...."
            onChange={inputChangeHandler("email")}
            value={formState.email}
          />

          <LoginFormStyle
            type="password"
            id="password"
            placeholder="Enter your password...."
            onChange={inputChangeHandler("password")}
            value={formState.password}
          />
          <Button>Login</Button>
        </form>
      </FormStyle>
    </LoginPageStyle>
  );
};

export default Login;

const LoginPageStyle = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;
const FormStyle = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const LoginFormStyle = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  cursor: pointer;
`;

