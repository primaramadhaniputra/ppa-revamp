import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${mediaQueries.md} {
        flex-direction: row;
        margin: 10px 0 10px;
    }
`;

export const ButtonWrapper = styled.div`
    order: 1;
    display: flex;
    gap: 10px;
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

export const StyledText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.sm.fontSize};
    & span {
        font-weight: ${fontWeights.bold};
        font-size: ${fontSizing.md.fontSize};
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
