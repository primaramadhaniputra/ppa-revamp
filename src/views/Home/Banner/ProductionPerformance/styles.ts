import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, mediaQueries } from 'utils/styles';

export const Container = styled(Grid).attrs({
    container: true,
})`
    background-color: #ffecde;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
    ${mediaQueries.md} {
        width: auto;
        margin-top: 0;
    }
`;

export const TabsText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.md.fontSize};
    padding: 10px 25px;
    border-radius: 8px;
    color: ${colors.orange};
`;

export const AchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const AchLabel = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.sm.fontSize};
    background-color: ${colors.orange};
    color: white;
    padding: 3px 15px;
    border-radius: 3px;
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const TabsAchContainer = styled.div`
    background-color: #ffecde;
    display: flex;
    align-items: center;
    border-radius: 3px;
    color: ${colors.orange};
    height: max-content;
    margin: auto;
`;

export const TabsAch = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: ${fontSizing.xs.fontSize};
    border-radius: 5px;
    padding: 2px 15px;
    cursor: pointer;
`;
