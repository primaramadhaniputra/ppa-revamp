import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const Container = styled.div`
    margin-top: 30px;
    box-shadow: none;
    padding: 0;
    border-radius: 3px;
    ${mediaQueries.sm} {
        padding: 20px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    }
`;
