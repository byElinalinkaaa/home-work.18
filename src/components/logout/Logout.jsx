import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActionTypes } from "../../store/register/registerReducer";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
      dispatch({ type: authActionTypes.LOGOUT });
      navigate("/login");
    };
  return (
    <div>
      <Button onClick={logoutHandler}>
        Logout
        <Img
          src="https://avatars.mds.yandex.net/i?id=6ac7719c6f38405ec8c74215851058cf-3536087-images-thumbs&n=13"
          alt=""
        />
      </Button>
    </div>
  );
}

export default Logout
// const Header = styled.div`
//   width: 1540px;
//   height: 80px;
//   background-color: #7eb8b8;
//   display: flex;
//   justify-content: end;
// `;

const Button = styled.button`
  background-color: aqua;
  width:1600px;
  border: none;
  font-size: 30px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
