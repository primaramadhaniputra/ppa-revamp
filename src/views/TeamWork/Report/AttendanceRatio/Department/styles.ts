import { fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, fontWeights } from 'utils/styles';

export const TabsContainer = styled.div`
    margin-top: 10px;
    background-color: ${colors.orangeGrey};
    color: ${colors.orange};
    display: flex;
    border-radius: 10px;
`;

export const StyledText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.lg.fontSize};
    cursor: pointer;
    padding: 10px 40px;
    border-radius: 10px;
    &.active {
        background-color: ${colors.orange};
        font-weight: ${fontWeights.bold};
        color: white;
    }
`;
