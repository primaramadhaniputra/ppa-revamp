import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights, mediaQueries } from "utils/styles";

interface IProps {
	isActiveChart?: boolean;
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	font-family: ${fontFamilies.poppins};
	margin: 10px 0;
	padding: 0 10px;
	width: 100%;
	position: relative;
	cursor: pointer;
	height: 100%;
`;

export const ActiveWrapperTotal = styled.div<IProps>`
	width: 100%;
	gap: 20px;
	${mediaQueries.md} {
		display: ${(props) => (props.isActiveChart ? "flex" : "initial")};
	}
`;

export const WrapperTotalText = styled.div<IProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 5px;
	order: 2;
	max-width: 300px;
	justify-content: center;
	${mediaQueries.md} {
		border-left: ${(props) => (props.isActiveChart ? "2px solid #969696" : "0")};
		padding-left: ${(props) => (props.isActiveChart ? "14px" : "0")};
		gap: ${(props) => (props.isActiveChart ? "50px" : "5px")};
	}
`;

export const TotalText = styled.p<IProps>`
	font-family: ${fontFamilies.poppins};
	font-size: 18px;
	color: #2a2a2d;
	font-weight: ${fontWeights.medium};
	& span {
		color: ${(props) => (props.isActiveChart ? "#969696" : "black")};
	}
	& span.data {
		font-size: ${(props) => (props.isActiveChart ? "32px" : "18px")};
		color: black;
		font-weight: ${(props) => (props.isActiveChart ? fontWeights.semi : fontWeights.medium)};
		line-height: ${(props) => (props.isActiveChart ? "120%" : "20px")};
	}
`;

export const ChartContainer = styled.div`
	display: grid;
	flex: 1;
	grid-template-columns: minmax(250px, 1fr);
`;
