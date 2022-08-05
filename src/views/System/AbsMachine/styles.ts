import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const Container = styled.div`
    box-shadow: none;
    margin-top: 30px;
    padding: 0;
    ${mediaQueries.sm} {
        padding: 20px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        background-color: white;
    }
`;

export const THContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
