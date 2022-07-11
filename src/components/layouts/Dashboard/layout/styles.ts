import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div``;

export const ContentWrapper = styled.article`
  margin-top: 60px;
  padding: 30px 15px;
  background-color: #fff;
  min-height: calc(100vh - 129px);
  ${mediaQueries.lg} {
    padding: 30px 100px;
    margin-top: 0;
  }
`;

// export const LinkWrapper = styled(Grid)`
//   margin-top: 40px;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   ${mediaQueries.lg} {
//     display: none;
//   }
// `;

// export const SubMenuWrapper = styled.div``;
// export const SubMenu = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
// `;
