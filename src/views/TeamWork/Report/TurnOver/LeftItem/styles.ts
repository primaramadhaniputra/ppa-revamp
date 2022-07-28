import { fontFamilies, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    padding-left: 0;
    ${mediaQueries.lg} {
        padding-left: 70px;
    }
`;

export const TextTurnOver = styled(Text).attrs({
    variant: 'h4',
})`
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizing.xl.fontSize};
`;
export const TextSite = styled(Text).attrs({
    variant: 'h4',
})`
    font-size: ${fontSizing['5xl'].fontSize};
    margin: 10px 0;
`;

export const TextDate = styled(Text).attrs({
    variant: 'p',
})`
    font-size: ${fontSizing.xs.fontSize};
    font-family: ${fontFamilies.poppins};
    color: rgba(0, 0, 0, 0.6);
    & span {
        font-weight: ${fontWeights.bold};
        font-size: ${fontSizing.md.fontSize};
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const TextTurnOverPercent = styled(Text).attrs({
    variant: 'h4',
})`
    font-size: ${fontSizing['4xl'].fontSize};
    font-weight: ${fontWeights.bold};
    margin: 10px 0;
    color: rgba(0, 0, 0, 0.8);
    margin: 50px 0;
    ${mediaQueries.sm} {
        font-size: ${fontSizing['6xl'].fontSize};
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    column-gap: 30px;
    row-gap: 10px;
    flex-direction: column;
    ${mediaQueries.sm} {
        flex-direction: row;
        align-items: center;
    }
`;

export const ColorItem = styled.div`
    min-width: 110px;
    height: 20px;
    background-color: #fcb92c;
`;

export const TextInfo = styled(Text).attrs({
    variant: 'p',
})`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
`;
