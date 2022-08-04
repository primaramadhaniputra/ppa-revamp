import { Card, fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const ThItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
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

export const Container = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    flex-direction: column;
    ${mediaQueries.xl} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const DateText = styled(Text).attrs({
    variant: 'p',
})`
    font-family: ${fontFamilies.poppins};
    color: rgba(0, 0, 0, 0.5);
    & span {
        color: grey;
        font-weight: ${fontWeights.bold};
        font-size: ${fontSizing.lg.fontSize};
    }
`;

export const InduksiContainer = styled.div`
    row-gap: 20px;
    column-gap: 70px;
    flex-direction: column;
    display: flex;
    ${mediaQueries['2xl']} {
        flex-direction: row;
    }
`;

export const Wrapper = styled(Card)`
    margin-top: 15px;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    border-radius: 3px;
    /* ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    } */
`;

export const WrapperTitle = styled(Grid).attrs({
    container: true,
})`
    gap: 20px;
    justify-content: space-between;
    flex-direction: column;
    ${mediaQueries.md} {
        align-items: center;
        flex-direction: row;
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

export const TitleText = styled(Text).attrs({
    variant: 'h3',
})`
    font-weight: ${fontWeights.bold};
    font-size: 18px;
    ${mediaQueries.md} {
        font-size: 22px;
    }
`;
