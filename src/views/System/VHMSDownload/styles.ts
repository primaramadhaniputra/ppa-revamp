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
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 0 20px;
    ${mediaQueries.xl} {
        width: 70%;
    }
`;
export const DoughnutWrapper = styled.div`
    width: 100%;
    margin-top: 0px;
    ${mediaQueries.xl} {
        margin-top: 20px;
        width: 30%;
    }
`;