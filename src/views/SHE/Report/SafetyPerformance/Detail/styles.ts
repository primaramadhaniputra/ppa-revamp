import { Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 40px;
`;

export const TableHeader = styled(Text).attrs({
    variant: 'h4',
})`
    font-size: ${fontSizing.md.fontSize};
    font-weight: ${fontWeights.bold};
    background-color: #ffd4da;
    padding: 10px;
    border-radius: 3px;
    ${mediaQueries.md} {
        font-size: ${fontSizing.lg.fontSize};
    }
`;

export const Container = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    ${mediaQueries.lg} {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(auto-fit, minMax(500px, 1fr));
    }
`;
