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
    position: relative;
    ${mediaQueries.sm} {
        padding: 0 20px;
    }
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
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    ${mediaQueries.md} {
        width: auto;
    }
`;

export const WrapperInput = styled(Grid).attrs({
    container: true,
})`
    margin-bottom: 30px;
    row-gap: 10px;
    column-gap: 30px;
    ${mediaQueries.md} {
        width: 80%;
    }
    ${mediaQueries.lg} {
        width: 70%;
    }
    ${mediaQueries.xl} {
        width: 50%;
    }
`;
