import { fontFamilies, Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

interface IProps {
  variant?: string;
}

export const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minMax(420px, 1fr));
    row-gap: 30px;
  }
  ${mediaQueries.xl} {
    grid-template-columns: repeat(auto-fit, minMax(500px, 1fr));
  }
`;

export const SingleProduct = styled.div`
  background: #f7f7f7;
  box-shadow: 0px 1px 3px rgba(176, 176, 176, 0.8);
  border-radius: 5px;
  padding: 15px;
  min-height: 134px;
  cursor: pointer;
`;

export const ProductText = styled.p<IProps>`
  font-family: ${fontFamilies.poppins};
  font-size: 10px;
  line-height: 21px;
  color: #000000;
  display: flex;
  align-items: center;
  font-weight: ${fontWeights.medium};
  gap: 5px;
  @media (min-width: 310px) {
    font-size: 12px;
  }
  ${mediaQueries.sm} {
    font-size: 14px;
    gap: 15px;
  }
  ${mediaQueries.xl} {
    font-size: ${(props) => (props.variant === "header" ? "20px" : "14px")};
  }
`;

export const ProductTitle = styled(Text).attrs({
  variant: "h3",
})`
  font-weight: ${fontWeights.bold};
  margin-top: 50px;
  font-family: ${fontFamilies.poppins};
  font-size: 20px;
  ${mediaQueries.sm} {
    font-size: 24px;
  }
`;

export const SpanHeader = styled.span`
  font-family: ${fontFamilies.poppins};
  font-weight: 600;
  font-size: 10px;
  color: #efefef;
  padding: 3px;
  border-radius: 5px;
  ${mediaQueries.md} {
    font-size: 14px;
    gap: 25px;
    padding: 5px;
  }
`;

export const HeaderContainer = styled(Grid).attrs({
  container: true,
})`
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 15px;
`;

export const ProductTextContainer = styled(Grid).attrs({
  container: true,
})`
  justify-content: space-between;
  /* gap: 5px; */
`;
