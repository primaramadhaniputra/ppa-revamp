import { Card, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const TitleChart = styled(Text).attrs({
    variant: 'h4',
})`
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizing.md.fontSize};
    margin-bottom: 20px;
`;

export const Wrapper = styled(Card)`
    margin-top: 30px;
    padding: 0;
    box-shadow: none;
    border-radius: 3px;
    ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    }
`;
