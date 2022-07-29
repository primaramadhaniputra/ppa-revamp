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
    box-shadow: none;
    /* margin-top: 20px; */
    border-radius: 3px;
    padding: 0;
    ${mediaQueries.sm} {
        margin-top: 20px;
        padding: 0 20px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    }
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

export const THContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
