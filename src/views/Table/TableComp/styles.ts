import styled from 'styled-components';
import { colors } from 'utils/styles';

export const Wrapper = styled.div`
    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 12px;
        height: 7px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
`;

export const TABLE = styled.table`
    font-family: 'Times New Roman', Times, serif;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    padding: 20px;
    margin-top: 20px;
    & td {
        padding: 20px;
    }

    & th {
        padding: 20px;
    }
    & tbody tr:nth-child(even) {
        /* background: ${colors.primary}; */
    }

    & thead {
        background: ${colors.blueSky};
    }

    & tbody {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
    }
    & thead th {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        color: black;
        text-align: center;
    }
    & thead th:first-child {
        border-left: none;
    }

    /* & tfoot {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
        color: black;
        text-align: center;
    }

    & tfoot td {
        font-size: 14px;
    } */
`;
