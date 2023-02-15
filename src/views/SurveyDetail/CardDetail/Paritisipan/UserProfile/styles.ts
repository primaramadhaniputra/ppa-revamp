import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	border: 1px solid black;
	border-radius: 10px;
	padding: 16px;
	width: 100%;
	/* height: max-content; */
	margin-bottom: 6px;
`;

export const UserName = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`;
export const UserJob = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	color: rgba(37, 40, 43, 0.6);
`;

export const PaginationContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	& ul {
		display: flex;
		gap: 5px;
		font-family: ${fontFamilies.poppins};
		font-weight: 800;
		font-size: 14px;
	}
	& ul li {
		list-style: none;
		display: flex;
		color: #185bc3;
		border-radius: 4px;
		border: 1px solid #185bc3;
	}
	& ul li.active_pagination {
		background-color: #185bc3;
		color: white;
	}
	& ul li a {
		list-style: none;
		padding: 5px 10px;
		cursor: pointer;
	}
`;
