import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled(Grid).attrs({
    container: true,
})`
    margin-top: 10px;
    gap: 15px;
    ${mediaQueries.lg} {
        width: 80%;
    }
    ${mediaQueries.xl} {
        width: 70%;
    }
`;

export const TextYear = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.lg.fontSize};
    color: rgba(0, 0, 0, 0.5);
    & span {
        font-weight: ${fontWeights.bold};
        font-size: ${fontSizing['4xl'].fontSize};
    }
`;
