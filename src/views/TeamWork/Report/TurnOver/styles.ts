import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const ItemContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    ${mediaQueries.xl} {
        column-gap: 20px;
        flex-direction: row;
    }
`;
