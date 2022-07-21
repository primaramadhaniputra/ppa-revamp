import { colors, fontFamilies } from "@hudoro/neron";
import { colors as c, fontSizing, fontWeights } from "utils/styles";
import styled from "styled-components";

interface ITabText {
  activeTab?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabText = styled.p<ITabText>`
  font-family: ${fontFamilies.poppins};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizing.sm.fontSize};
  line-height: ${fontSizing.md.lineHeight};
  cursor: pointer;
  padding: 5px 20px;
  color: ${(props) =>
    props.activeTab === true ? colors.white[100] : colors.black[100]};
  background-color: ${(props) =>
    props.activeTab === true ? c.primary : colors.white[100]};
  font-weight: ${(props) =>
    props.activeTab === true ? fontWeights.bold : fontWeights.regular};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
