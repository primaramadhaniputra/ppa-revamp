import { fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const SelectContainer = styled.div`
    position: relative;
    & label {
        margin-bottom: 5px;
        display: block;
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.sm.fontSize};
    }
`;

export const Container = styled.div`
    /* box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1); */
    padding: 20px 0;
`;

export const WrapperStatus = styled(Grid).attrs({
    container: true,
})`
    align-items: center;
    justify-content: flex-end;
    column-gap: 30px;
    row-gap: 15px;
`;

export const StatusText = styled(Text).attrs({
    variant: 'h4',
})`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.sm.fontSize};
    font-weight: ${fontWeights.bold};
`;

export const BoxContainer = styled(Grid).attrs({
    container: true,
})`
    gap: 10px;
    align-items: center;
    width: 100%;
    ${mediaQueries.md} {
        width: auto;
    }
`;

export const Box = styled.div`
    min-width: 80px;
    /* width:100%; */
    height: 17px;
    flex: 1;
    order: 1;
    ${mediaQueries.md} {
        order: 0;
    }
`;
