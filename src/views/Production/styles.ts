import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const WrapperDate = styled(Grid).attrs({
    container: true,
})`
    justify-content: flex-end;
    margin-top: 30px;
    flex-direction: column;
    gap: 15px;
    ${mediaQueries.lg} {
        flex-direction: row;
    }
`;

export const TabsContainer = styled(Grid).attrs({
    container: true,
})`
    align-items: flex-end;
    padding: 5px 0;
    gap: 20px;
    order: 1;
    ${mediaQueries.lg} {
        order: 0;
    }
`;

export const TabsText = styled.p`
    padding: 10px 37px;
    border-radius: 5px;
    font-family: ${fontFamilies.poppins};
    font-weight: 400;
    font-size: 14px;
    color: white;
    cursor: pointer;
    flex: 1;
    text-align: center;
`;
