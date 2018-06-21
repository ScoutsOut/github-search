import styled from "styled-components";
import { colors } from "../../styled-component-variables";

const ButtonSc = styled.button`
  border-radius: 4px;
  border: 0;
  background-color: ${props =>
    props.type === "button" ? colors.red : colors.blue};
  color: ${colors.white};
  padding: 10px 0;
  margin: 20px 0 auto;
  width: 100%;
  font-size: 14px;
  text-shadow: 0 0 2px rga(3, 3, 3, 0.8);
  outline: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    background-color: ${colors.blue};
  }
`;

export default ButtonSc;