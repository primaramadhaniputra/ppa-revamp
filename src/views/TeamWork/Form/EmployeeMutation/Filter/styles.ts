import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${mediaQueries.md} {
        flex-direction: row;
    }
`;

export const ButtonWrapper = styled.div`
    order: 1;
    display: flex;
    gap: 5px;
    flex-direction: column;
    ${mediaQueries.md} {
        flex-direction: row;
        order: 0;
    }
`;

export const ContainerPeriode = styled(Grid).attrs({
    container: true,
    alignItems: 'center',
})`
    flex: 1;
    gap: 20px;
    ${mediaQueries.md} {
        gap: 70px;
    }
`;

export const StyledInput = styled.input`
    padding: 0 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    min-height: 30px;
    border-radius: 3px;
    font-family: ${fontFamilies.poppins};
    outline: none;
    width: 100%;
`;
