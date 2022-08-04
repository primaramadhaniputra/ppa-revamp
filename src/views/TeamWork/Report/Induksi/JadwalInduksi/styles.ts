import { fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 30px;
    flex: 1;
    ${mediaQueries.md} {
        background-color: white;
        padding: 15px;
    }
`;
export const Container = styled(Grid).attrs({
    container: true,
    justifyContent: 'space-between',
    aligitems: 'center',
})`
    background-color: #bfd9ff;
    border-radius: 5px;
    padding: 15px 10px;
    gap: 5px;
    ${mediaQueries.sm} {
        padding: 15px 25px;
    }
`;

export const TextInfo = styled(Text).attrs({
    variant: 'p',
})`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
    background-color: ${colors.orange};
    color: white;
    padding: 3px 18px;
    display: flex;
    align-items: center;
    border-radius: 5px;
`;
