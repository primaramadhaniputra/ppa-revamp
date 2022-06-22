import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.section``;

export const ContentWrapper = styled.article`
  margin-top: 110px;
  padding: 30px 15px;
  ${mediaQueries.lg} {
    padding: 30px 100px;
    margin-top: 0;
  }
`;

export const SubMenuWrapper = styled.div``;
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
