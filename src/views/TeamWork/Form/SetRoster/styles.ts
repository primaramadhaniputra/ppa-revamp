import { Card } from "@hudoro/neron";
import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const Wrapper = styled.div`
	margin-top: 10px;
`;

export const FormContainer = styled(Card)`
	margin-top: 20px;
	text-align: center;
	padding: 20px 10px;
	box-shadow: none;
	border-radius: 3px;
	${mediaQueries.sm} {
		padding: 20px;
	}
`;

export const FormCard = styled.div`
	margin-top: 15px;
	border-top: 2px solid rgba(0, 0, 0, 0.1);
	border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	padding: 20px 0;
	${mediaQueries.md} {
		padding: 50px 0;
	}
`;
