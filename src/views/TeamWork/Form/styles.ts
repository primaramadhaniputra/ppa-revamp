import { fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';

export const TabsContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

export const TabsText = styled.p`
    font-family: ${fontFamilies.poppins};
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
    background-color: white;
    border-radius: 3px;
    color: black;
`;
