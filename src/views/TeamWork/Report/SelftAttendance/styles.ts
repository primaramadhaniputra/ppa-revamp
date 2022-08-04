import { Card, fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';
import { fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const SelectContainer = styled.div`
    position: relative;
    & label {
        margin-bottom: 5px;
        display: block;
        font-family: ${fontFamilies.poppins};
        font-size: ${fontSizing.sm.fontSize};
    }
`;

export const WrapperStatus = styled(Grid).attrs({
    container: true,
})`
    align-items: center;
    justify-content: flex-end;
    column-gap: 30px;
    row-gap: 15px;
`;

export const StatusText = styled(Text).attrs({
    variant: 'h4',
})`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.sm.fontSize};
    font-weight: ${fontWeights.bold};
`;

export const BoxContainer = styled(Grid).attrs({
    container: true,
})`
    gap: 10px;
    align-items: center;
    width: 100%;
    ${mediaQueries.md} {
        width: auto;
    }
`;

export const Box = styled.div`
    min-width: 80px;
    /* width:100%; */
    height: 17px;
    flex: 1;
    order: 1;
    ${mediaQueries.md} {
        order: 0;
    }
`;

export const Wrapper = styled(Card)`
    margin-top: 10px;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    border-radius: 3px;
    /* ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    } */
`;

export const WrapperTitle = styled(Grid).attrs({
    container: true,
})`
    margin-top: 20px;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    ${mediaQueries.md} {
        background-color: white;
        padding: 10px 15px;
        margin-top: 0;
    }
`;
export const WrapperTable = styled(Grid)`
    margin-top: 20px;
    ${mediaQueries.md} {
        background-color: white;
        padding: 15px;
    }
`;

export const TitleText = styled(Text).attrs({
    variant: 'h3',
})`
    font-weight: ${fontWeights.extraBold};
    font-size: 18px;
    ${mediaQueries.md} {
        font-size: 22px;
    }
`;

export const TableTitle = styled(Text).attrs({
    variant: 'h4',
})`
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.bold};
    font-size: 15px;
    display: none;
    ${mediaQueries.md} {
        display: block;
        margin: 20px 0;
        font-size: 17px;
    }
`;
export const DateText = styled(Text).attrs({
    variant: 'p',
})`
    font-family: ${fontFamilies.poppins};
    font-size: 12px;
    color: #969799;
    & span {
        font-weight: ${fontWeights.bold};
        font-size: 16px;
    }
    ${mediaQueries.md} {
        font-size: 14px;
        & span {
            font-weight: ${fontWeights.bold};
            font-size: 23px;
        }
    }
`;
