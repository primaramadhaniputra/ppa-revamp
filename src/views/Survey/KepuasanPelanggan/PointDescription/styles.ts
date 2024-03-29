import { Card, fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

interface IProps {
	pointColor?: string;
}

export const StyledCard = styled(Card)`
	margin-top: 33px;
	padding: 30px 18px;
	background: #ffffff;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 15px;
	display: flex;
	align-items: center;
	gap: 24px;
`;

export const CardTitle = styled.p`
	font-family: ${fontFamilies.poppins};
	font-weight: 500;
	font-size: 22px;
	/* line-height: 36px; */
	@media (max-width: 500px) {
		font-size: 18px;
	}
`;

export const Container = styled.div`
	/* margin-top: 18px; */
	/* padding: 3px 24px; */
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`;
export const PointContainer = styled.div<IProps>`
	display: flex;
	gap: 8px;
	align-items: center;
	font-family: ${fontFamilies.poppins};
	font-size: 14px;
	&::before {
		display: inline-block;
		content: "";
		width: 16px;
		height: 16px;
		background: ${(props) => props.pointColor};
		border-radius: 50%;
	}
	@media (max-width: 500px) {
		font-size: 12px;
	}
`;
