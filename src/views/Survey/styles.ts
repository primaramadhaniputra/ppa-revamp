import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const CardSiteContainer = styled.div`
	margin-top: 33px;
	display: grid;
	column-gap: 59px;
	grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
	row-gap: 30px;
`;

export const StyledCard = styled(Card)`
	background: #ffffff;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	display: flex;
	flex: 1;
	padding: 14px;
	cursor: pointer;
`;

export const LogoContainer = styled.div`
	background: #d5e9eb;
	border-radius: 10px;
	padding: 36px 24px;
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CardTitle = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	@media (max-width: 500px) {
		font-size: 18px;
	}
`;

export const SubTitle = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: #29cc6a;
	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

export const TextDesc = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 12px;
	background: #b8e0ff;
	border-radius: 35px;
	height: max-content;
	padding: 5px 12px;
	font-weight: 600;
	&::after {
		display: block;
		content: "";
		width: 10px;
		height: 10px;
		background-color: #0062a3;
		border-radius: 50%;
	}
`;
