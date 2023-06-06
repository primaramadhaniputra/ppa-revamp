import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.section`
margin-top:70px;
`
export const DescriptionContainer = styled.article`
    display:flex;
    flex-direction:column;
    gap:14px;
`

export const TableContainer = styled.div`
margin-top:24px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;
padding:16px 24px;
`
export const DataTable = styled.table`
width:100%;
font-family:${fontFamilies.poppins};
& thead  {
    border-bottom:1px solid #969696;
    border-right:1px solid #969696;
   
}
& thead tr th {
    border-right:1px solid #969696;
    padding:17px;
}   
& thead tr:nth-child(2) th {
    /* border-top:2px solid #969696 */
}   
& tbody tr td{
    border-right:1px solid #969696;
    padding:17px;
    text-align:center;
    font-size:14px;
    font-weight:400;
}
& tbody tr:nth-child(odd){
    background-color:#f6f5f5
}
`