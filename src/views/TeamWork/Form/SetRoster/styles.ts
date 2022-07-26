import { Card, fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights } from 'utils/styles';

export const Wrapper = styled.div``;

export const FormContainer = styled(Card)`
    margin-top: 30px;
    text-align: center;
    padding-top: 30px;
`;

export const ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 37px;
    right: 15px;
`;

export const ArrowUP = styled.div`
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;

    border-bottom: 8px solid black;
`;

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;

    border-top: 8px solid black;
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 15px;
    top: 40px;
`;

export const CalendarContainer = styled.div`
    position: absolute;
`;

export const TextHeaderContainer = styled(Grid).attrs({})``;

export const FormCard = styled.div`
    margin-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StyledLabel = styled.label`
    margin-top: 6px;
    margin-bottom: 7px;
    display: block;
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizing.sm.fontSize};
`;

export const DropDownContainer = styled(Grid)`
    & svg {
        display: none;
    }
`;
