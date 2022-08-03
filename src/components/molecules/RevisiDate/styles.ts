import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const DateContainer = styled(Grid)`
  z-index: 99;
  min-width: 200px;
  background-color: transparent;
`;

export const DateIconContainer = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  position: absolute;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1.4px solid rgba(0, 0, 0, 0.1);
  padding: 5px 3px 0;
  font-size: 12px;
  width: 100%;
  font-family: ${fontFamilies.poppins};
  background-color: transparent;
  &::placeholder {
    font-family: ${fontFamilies.poppins};
    font-size: 13px;
  }
  ${mediaQueries.md} {
    font-size: 14px;
  }
`;
