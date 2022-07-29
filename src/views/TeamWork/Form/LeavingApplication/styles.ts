export const Wrapper = styled(Card)`
    margin-top: 30px;
    padding: 0px;
    box-shadow: none;
    border-radius: 3px;
    ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    }
`;
import { Card, fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, fontWeights, mediaQueries } from 'utils/styles';

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

export const FileContainer = styled.div`
    width: 100%;
    ${mediaQueries.md} {
        width: auto;
    }
    & div {
        background-color: ${colors.orange};
        color: #eee;
        font-weight: ${fontWeights.semi};
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.xl.fontSize};
        padding: 13px 20px;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        gap: 5px;
        align-items: center;
    }
`;

export const ThItemContainer = styled(Grid).attrs({
    container: true,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 7,
})`
    width: 100%;
`;
