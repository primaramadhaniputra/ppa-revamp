import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.blueSky};
  padding: 5px;
  border-radius: 3px;
`;

export const StyledLabel = styled.label`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 12px;
  color: black;
`;

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${colors.borderBlue};
  border-radius: 5px;
  padding: 5px 10px;
  font-family: ${fontFamilies.poppins};
  background-color: transparent;
  &::placeholder {
    font-family: ${fontFamilies.poppins};
  }
  &:focus {
    background: ${colors.blueSky};
    outline: 1px solid ${colors.primary};
  }
`;

export const ArrowDown = styled.div`
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 9px solid #000;
  position: absolute;
  right: 15px;
  top: 29px;
`;

export const DropdownMenuContainer = styled(Card)`
  position: absolute;
  bottom: -53px;
`;
