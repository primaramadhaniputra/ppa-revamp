import styled from 'styled-components';
import { colors, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    background-color: ${colors.primary};
    ${mediaQueries.lg} {
        height: 100vh;
    }
`;

export const WrapperImageInput = styled.div`
    ${mediaQueries.lg} {
        display: flex;
        padding: 0 100px;
        padding-left: 345px;
        height: 100%;
        align-items: center;
    }
`;

export const FooterContainer = styled.div`
    ${mediaQueries.lg} {
        display: none;
    }
`;
