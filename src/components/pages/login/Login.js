import styled from "styled-components";
import {
  CrudButton,
  CrudCustomForm,
  CrudInputFeild,
  CrudTypography,
} from "../../reusableComponents";

const LoginContainer = styled.div`
  width: 50%;
  height: auto;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export default function Login() {
  return (
    <div>
      <CrudCustomForm>
        <LoginContainer>
          <CrudTypography customColor="red">Login</CrudTypography>
          <CrudInputFeild placeholder="user name " />
          <CrudInputFeild placeholder="password " />
          <CrudButton
            variant="contained"
            style={{ width: "200px" }}
            type="submit"
          >
            Submit
          </CrudButton>
        </LoginContainer>
      </CrudCustomForm>
    </div>
  );
}
