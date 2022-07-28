import { Grid } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

export const DateContainer = styled(Grid)`
  background-color: ${colors.blueSky};
  border-radius: 5px;
  position: relative;
  padding: 10px;
  padding-bottom: 3px;
  & label {
    line-height: 5px;
    font-size: 12px;
    color: ${colors.darkGrey};
  }
`;

export const DateIconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 24px;
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
