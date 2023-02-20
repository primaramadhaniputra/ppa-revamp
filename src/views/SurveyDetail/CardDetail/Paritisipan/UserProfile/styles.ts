import { fontFamilies, Text } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

interface IProps {
	isActiveCard?: boolean;
}

export const Wrapper = styled.div`
	max-height: 500px;
	overflow-y: scroll;
	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	& {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
`;

export const Container = styled.div<IProps>`
	display: flex;
	align-items: center;
	gap: 20px;
	border: ${(props) => (props.isActiveCard ? "2px solid #0A8A9A" : "1px solid black")};
	box-shadow: ${(props) => (props.isActiveCard ? "0px 0px 10px rgba(0, 0, 0, 0.22)" : "none")};
	border-radius: 10px;
	padding: 16px;
	width: 100%;
	margin-bottom: 6px;
	background-color: ${(props) => (props.isActiveCard ? " #E8F6F8" : "white")};
	cursor: pointer;
`;

export const UserName = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	${mediaQueries.md} {
		font-size: 16px;
	}
`;
export const UserJob = styled(Text).attrs({
	variant: "p",
})`
	font-family: ${fontFamilies.poppins};
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: rgba(37, 40, 43, 0.6);
	${mediaQueries.md} {
		font-size: 13px;
	}
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
		font-size: 10px;
		overflow-x: scroll;
		/* Hide scrollbar for Chrome, Safari and Opera */
		&::-webkit-scrollbar {
			display: none;
		}

		/* Hide scrollbar for IE, Edge and Firefox */
		& {
			-ms-overflow-style: none; /* IE and Edge */
			scrollbar-width: none; /* Firefox */
		}
		${mediaQueries.md} {
			font-size: 14px;
		}
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
