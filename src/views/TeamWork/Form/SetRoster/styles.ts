import { Card, Grid } from '@hudoro/neron';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const FormContainer = styled.div`
    text-align: center;
    padding-top: 60px;
`;

export const ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 40px;
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

export const FormCard = styled(Card)`
    margin-top: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;
