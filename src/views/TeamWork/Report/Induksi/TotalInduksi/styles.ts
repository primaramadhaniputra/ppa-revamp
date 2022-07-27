import { fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing } from 'utils/styles';

export const Wrapper = styled.div`
    margin-top: 30px;
    flex: 1;
`;
export const Container = styled(Grid).attrs({
    container: true,
    justifyContent: 'space-between',
    aligitems: 'center',
})`
    background-color: #80be58;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
`;

export const TextInfo = styled(Text).attrs({
    variant: 'p',
})`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
    background-color: white;
    color: #80be58;
    padding: 3px 18px;
    display: flex;
    align-items: center;
    border-radius: 5px;
`;
