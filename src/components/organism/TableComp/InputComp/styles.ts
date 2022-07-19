import { fontFamilies, Grid } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

export const Wrapper = styled(Grid)`
  align-items: flex-end;
  gap: 20px;
  justify-content: space-between;
  & > div {
    width: 100%;
  }
  & > div > div {
    width: 100%;
  }

  ${mediaQueries.md} {
    & > div {
      width: auto;
    }
    & > div > div {
      width: auto;
    }
  }
`;

export const ButtonWrapper = styled.div``;

export const NumberInput = styled.input.attrs({
  type: "number",
})`
  max-width: 50px;
  padding: 4px 6px;
  outline: none;
  font-family: ${fontFamilies.poppins};
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-weight: ${fontWeights.regular};
`;

export const LabelSearch = styled.label`
  display: flex;
  align-items: center;
  font-family: ${fontFamilies.poppins};
  & ~ input {
    padding: 0 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    min-height: 30px;
  }
`;
