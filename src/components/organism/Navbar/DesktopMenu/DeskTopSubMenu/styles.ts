import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

interface IStyledCard {
  isActive?: boolean;
  width?: string;
}

export const StyledCard = styled(Card)<IStyledCard>`
  position: absolute;
  background-color: ${colors.primary} !important;
  color: white;
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 21px;
  top: 50px;
  min-width: ${(props) => (props.width ? props.width : "224px")};
  transition: 0.3s;
  transform: translateY(-20px);
  transform: ${(props) =>
    props.isActive ? "translateY(0)" : "translateY(-20px)"};
  z-index: ${(props) => (props.isActive ? "99" : "-99")};
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  /* z-index: -99; */
  padding: 10px;
  /* oc */
`;

export const StyledText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 12px;
  line-height: 0px;
  padding: 20px 10px;
  color: ${colors.white};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
