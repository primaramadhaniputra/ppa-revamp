import { Card, fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, mediaQueries } from 'utils/styles';

export const SelectContainer = styled.div`
    position: relative;
    & label {
        margin-bottom: 5px;
        display: block;
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.sm.fontSize};
    }
`;

export const ArrowDown = styled.div`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #000;
    position: absolute;
    right: 9px;
    top: 34px;
`;

export const ThItemContainer = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
    gap: 20px;
`;

export const StyledSpan = styled.span`
    color: #ff4863;
    font-family: ${fontFamilies.poppins};
    font-style: italic;
`;

export const Wrapper = styled(Card)`
    margin-top: 30px;
    padding: 0;
    box-shadow: none;
    border-radius: 3px;
    ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    }
`;
