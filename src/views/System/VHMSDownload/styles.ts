import styled from 'styled-components';
import { mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: flex-start;
    flex-direction: column;
    ${mediaQueries.xl} {
        flex-direction: row;
    }
`;

export const TableWrapper = styled.div`
    width: 100%;
    ${mediaQueries.xl} {
        width: 70%;
    }
`;
export const DoughnutWrapper = styled.div`
    width: 100%;
    margin-top: 0px;
    ${mediaQueries.xl} {
        margin-top: 50px;
        width: 30%;
    }
`;
