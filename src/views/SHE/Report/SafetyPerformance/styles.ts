import styled from 'styled-components';
import { fontFamilies, Grid } from '@hudoro/neron';
import { colors, fontSizing, fontWeights, mediaQueries } from 'utils/styles';

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

export const TabsContainer = styled(Grid).attrs({
    container: true,
})`
    /* margin-top: 10px; */
    background-color: ${colors.orangeGrey};
    color: ${colors.orange};
    display: flex;
    border-radius: 5px;
    align-self: stretch;
    flex-direction: column;
    ${mediaQueries.xl} {
        flex-direction: row;
    }
`;

export const StyledText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.lg.fontSize};
    cursor: pointer;
    padding: 10px 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    &.active {
        background-color: ${colors.orange};
        font-weight: ${fontWeights.bold};
        color: white;
    }
`;

export const CartWrapper = styled.div`
    gap: 20px;
    ${mediaQueries.md} {
        grid-template-columns: repeat(auto-fit, minMax(500px, 1fr));
        display: grid;
    }
`;
