import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const Wrapper = styled.div`
	background-color: white;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	padding: 10px;
	margin: 10px 0;
	border: 1px solid rgba(0, 0, 0, 0.07);
	border-radius: 3px;
`;

export const WrapperChildren = styled.div`
	transition: 0.1s;
`;

export const Container = styled.div``;

export const WrapperIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
`;

export const FilterText = styled.p`
	font-family: ${fontFamilies.poppins};
	font-size: 16px;
	font-weight: ${fontWeights.medium};
`;
