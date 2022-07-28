import { fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing } from 'utils/styles';

export const SelectContainer = styled.div`
    position: relative;
    & label {
        margin-bottom: 5px;
        display: block;
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.sm.fontSize};
    }
    & svg {
        display: none;
    }
`;

export const ArrowDown = styled.div`
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid #000;
    position: absolute;
    right: 15px;
    top: 34px;
`;
