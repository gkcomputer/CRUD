import styled from "styled-components";
import {
  CrudButton,
  CrudCustomForm,
  CrudInputFeild,
  CrudPaper,
  CrudTypography,
} from "../../reusableComponents";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "gk",
    password: "test",
  });

  const handlechange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("loginDetails", loginDetails);
  };
  return (
    <>
      <CrudCustomForm onSubmit={formSubmit}>
        <CrudPaper paperStyles={{ width: "500px" }}>
          <LoginContainer>
            <CrudTypography
              fontFamily="sans-serif"
              fontWeight={900}
              fontSize="x-large"
            >
              Welcome
            </CrudTypography>
            <CrudTypography customColor="blue">
              Please enter your Details
            </CrudTypography>
            <CrudInputFeild
              placeholder="user name "
              name="username"
              onChange={handlechange}
              value={loginDetails.username}
              width="200px"
            />
            <CrudInputFeild
              placeholder="password "
              name="password"
              onChange={handlechange}
              value={loginDetails.password}
            />
            <CrudButton variant="contained" type="submit">
              Login
            </CrudButton>
            <CrudTypography customColor="blue">Forgot password?</CrudTypography>
            <CrudTypography customColor="blue">
              Dont have account? <Link to="/Signup">Sign up</Link>
            </CrudTypography>
          </LoginContainer>
        </CrudPaper>
      </CrudCustomForm>
    </>
  );
}
