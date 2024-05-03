import { Link } from "react-router-dom";
import styled from "styled-components";
import { CrudPaper } from "../reusableComponents";
import EmployeeAvatars from "../avatar/LetterAvatars";
import logo from "../../assests/logo3.jpg";

export default function Header() {
  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: blue;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    gap: 20px;
    padding: 0px 10px;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: blue;
  `;

  const StyledAvatar = styled.div`
    margin-left: auto;
  `;

  return (
    <CrudPaper
      paperStyles={{ width: "97%", height: "60px" }}
      boxStyles={{ marginLeft: "20px" }}
      elevation="1"
      margin="8px"
    >
      <HeaderContainer>
        <div>
          <img
            src={logo}
            alt="logo"
            width={100}
            style={{ borderRadius: "5px" }}
          />
        </div>
        <StyledLink to="/Search">Home</StyledLink>
        {/* <StyledLink to="/DashBoard">Dashboard</StyledLink>
        <StyledLink to="/Login">Login</StyledLink>
        <StyledLink to="/Login">Logout</StyledLink> */}
        <StyledAvatar>
          <EmployeeAvatars />
        </StyledAvatar>
      </HeaderContainer>
    </CrudPaper>
  );
}
