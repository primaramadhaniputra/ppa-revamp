import { Card, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div``;

export const FormContainer = styled(Card)`
    margin-top: 30px;
    text-align: center;
    padding: 20px 10px;
    box-shadow: none;
    border-radius: 3px;
    ${mediaQueries.sm} {
        padding: 20px;
    }
`;

export const TextHeaderContainer = styled(Grid).attrs({})``;

export const FormCard = styled.div`
    margin-top: 15px;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    ${mediaQueries.md} {
        padding: 50px 0;
    }
`;

export const StylingText = styled(Text).attrs({
    variant: 'h4',
})`
    font-weight: ${fontWeights.bold};
    font-size: 22px;
    background-color: white;
    padding: 10px 15px;
    border-radius: 3px;
`;
