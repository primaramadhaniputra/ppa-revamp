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
    background-color: ${colors.orange};
    color: white;
    display: block;
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
    padding: 5px 15px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    & label {
        cursor: pointer;
    }
    & :nth-child(1) {
        font-size: 30px;
    }
`;

export const ThItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Wrapper = styled(Card)`
    padding: 0;
    box-shadow: none;
    border-radius: 3px;
    background-color: transparent;
    ${mediaQueries.sm} {
        /* box-shadow: 0 0 25px rgba(0, 0, 0, 0.15); */
        padding: 0;
    }
`;

export const WrapperTitle = styled(Grid).attrs({
    container: true,
})`
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    ${mediaQueries.md} {
        background-color: white;
        padding: 10px 15px;
    }
`;
export const WrapperTable = styled(Grid)`
    margin-top: 20px;
    ${mediaQueries.md} {
        background-color: white;
        padding: 15px;
    }
`;
