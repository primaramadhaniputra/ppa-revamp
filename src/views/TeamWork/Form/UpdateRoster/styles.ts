import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, fontWeights } from 'utils/styles';

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
    & label {
        background-color: ${colors.orange};
        color: #eee;
        display: block;
        font-weight: ${fontWeights.semi};
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.xl.fontSize};
        padding: 10px 15px;
        border-radius: 50px;
        cursor: pointer;
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
