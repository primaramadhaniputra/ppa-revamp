import { Card, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled(Card)`
    margin-top: 10px;
    padding: 0;
    box-shadow: none;
    border-radius: 3px;
    flex: 5;
    background-color: transparent;
    /* ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    } */
`;

export const ArrowUp = styled.div`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-bottom: 6px solid black;
`;

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    margin-top: 2px;
    border-top: 6px solid black;
`;

export const ThItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TableTitle = styled(Text).attrs({
    variant: 'h4',
})`
    font-size: 15px;
    font-weight: ${fontWeights.bold};
    text-align: center;
    ${mediaQueries.md} {
        margin-top: 15px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const IconContainer = styled(Grid).attrs({
    container: true,
    justifyContent: 'center',
    alignItems: 'center',
})`
    border-radius: 2px;
    flex: 1;
    padding: 3px 0;
`;

export const IconWrapper = styled(Grid).attrs({
    container: true,
    gap: 3,
    justifyContent: 'center',
})`
    & > :nth-child(1) {
        background-color: #4a7abc;
    }
    & > :nth-child(2) {
        background-color: #f05d5d;
    }
`;
