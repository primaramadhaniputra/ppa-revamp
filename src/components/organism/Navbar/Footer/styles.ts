import { fontFamilies, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    /* margin-top: 50px; */
    padding: 20px 0;
    border-top: 1px solid #9b9ea2;
`;

export const FooterText = styled(Text)`
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.medium};
    font-size: 12px;
    ${mediaQueries.lg} {
        font-size: 15px;
    }
`;
