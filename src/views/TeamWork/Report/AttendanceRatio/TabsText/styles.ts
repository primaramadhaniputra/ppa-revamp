import { fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, fontWeights } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

export const StyledText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: 2px solid white;
    color: rgba(0, 0, 0, 0.3);
    &.active {
        font-weight: ${fontWeights.bold};
        border-bottom: 2px solid ${colors.orange};
        color: black;
    }
`;
