import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    ${mediaQueries.sm} {
        grid-template-columns: repeat(auto-fit, minMax(330px, 1fr));
    }
`;

export const SingleProduct = styled.div`
    background: #f7f7f7;
    box-shadow: 0px 1px 3px rgba(176, 176, 176, 0.8);
    border-radius: 5px;
    padding: 15px;
`;

export const ProductText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: 10px;
    line-height: 21px;
    color: #000000;
    @media (min-width: 310px) {
        font-size: 12px;
    }
    ${mediaQueries.sm} {
        font-size: 14px;
    }
`;

export const HeaderContainer = styled(Grid).attrs({
    container: true,
})`
    justify-content: space-between;
    gap: 5px;
`;

export const ProductTextContainer = styled(Grid).attrs({
    container: true,
})`
    justify-content: space-between;
    gap: 5px;
`;
