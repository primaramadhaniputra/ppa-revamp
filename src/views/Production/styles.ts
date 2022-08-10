import { Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const WrapperDate = styled(Grid).attrs({
    container: true,
})`
    justify-content: flex-end;
    margin-top: 30px;
    flex-direction: column;
    row-gap: 15px;
    ${mediaQueries.md} {
        flex-direction: row;
    }
`;
