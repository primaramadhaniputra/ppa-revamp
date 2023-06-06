import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 32px;
	display: flex;
	column-gap: 85px;
	justify-content: space-between;
	row-gap: 20px;
	flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 0;
	flex: 1;
	min-width: 250px;
	padding: 17.5px 14px;
`;

export const IconContainer = styled.div`
	background: #d5e9eb;
	border-radius: 8px;
	padding: 15px;
`;

export const StatusText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 16px;
	color: #29cc6a;
	@media (max-width: 500px) {
		font-size: 14px;
	}
`;
export const ValueText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 24px;
	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	align-items: center;
`;

export const ButtonExport = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 14px;
gap: 4px;
background: #0099FF;
border-radius: 8px;
color:#CFFDE1;
border:none;
cursor:pointer;
`