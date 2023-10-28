import styled from "styled-components";
export const StyledButton = styled.button`
  background-color: ${(props) => props.backcolor || "#8C0404"};
  color: ${(props) => props.color || "#8C0404"};
  padding: ${(props) => props.padding || "10px 20px"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "600"};
  height: ${(props) => props.height || "40px"};
  /* font-family: ${(props) => props.fontFamily || "poppins"}; */
  cursor: ${(props) => props.cursor || "pointer"};
  &:hover {
    background-color: #0056b3;
  }
`;
