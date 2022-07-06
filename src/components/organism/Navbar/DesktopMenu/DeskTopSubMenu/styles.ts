import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { colors, fontWeights } from "utils/styles";

export const StyledCard = styled(Card)`
  position: absolute;
  min-width: 150px;
  background-color: ${colors.primary} !important;
  color: white;
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 21px;
  top: 80px;
  min-width: 224px;
  z-index: 99;
`;

export const StyledText = styled.p`
  font-family: ${fontFamilies.poppins};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 21px;
  color: ${colors.white};
  margin-bottom: 20px;
  cursor: pointer;
`;
