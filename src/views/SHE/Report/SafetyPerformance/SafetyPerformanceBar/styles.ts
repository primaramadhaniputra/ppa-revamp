import { Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights } from 'utils/styles';

export const TitleChart = styled(Text).attrs({
    variant: 'h4',
})`
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizing.md.fontSize};
    margin-bottom: 20px;
`;

export const Wrapper = styled.div``;
