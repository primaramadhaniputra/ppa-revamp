import { Card } from '@hudoro/neron';
import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const ItemContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    ${mediaQueries.xl} {
        display: grid;
        column-gap: 20px;
        grid-template-columns: repeat(auto-fit, minMax(600px, 1fr));
    }
`;

export const Wrapper = styled(Card)`
    margin-top: 30px;
    padding: 0;
    box-shadow: none;
    border-radius: 3px;
    ${mediaQueries.sm} {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 20px;
    }
`;
