import { colors, fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 55px;
`;

export const SingleProduct = styled.div`
    background: #f7f7f7;
    box-shadow: 0px 1px 3px rgba(176, 176, 176, 0.8);
    border-radius: 5px;
    padding: 15px 20px;
    ${mediaQueries.md} {
        width: 325px;
    }
`;

export const WrapperProduct = styled(Grid).attrs({
    container: true,
})`
    flex-direction: column;
    ${mediaQueries.md} {
        flex-direction: row;
    }
`;

export const Title = styled.p`
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.semi};
    font-size: 14px;
    color: ${colors.black};
    ${mediaQueries.md} {
        font-size: 18px;
    }
`;

export const Lozenge = styled.p`
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.semi};
    font-size: 20px;
    color: #efefef;
    background-color: #47bf34;
    border-radius: 5px;
    padding: 5px;
    margin: 20px 0;
    text-align: center;
    ${mediaQueries.md} {
        font-size: 24px;
    }
`;
