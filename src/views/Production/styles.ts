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
    ${mediaQueries.md} {
        flex-direction: row;
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
`;
