import { Grid, Text } from "@hudoro/neron";
import styled from "styled-components";
import { colors } from "utils/styles";

interface ISubMenu {
  height: number;
}

export const MenuContainer = styled(Grid)`
  border-bottom: 1px solid white;
  padding-bottom: 10px;
`;

export const SubMenuWrapper = styled.div<ISubMenu>`
  transition: 0.3s all ease-in;
  height: ${(props) => `${props.height}px`};
  overflow: hidden;
`;
export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubMenuText = styled(Text)`
  font-size: 13px;
  color: ${colors.white};
`;
