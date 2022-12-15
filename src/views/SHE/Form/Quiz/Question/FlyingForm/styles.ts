import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontWeights } from "utils/styles";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
`;

export const AnswerWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
	gap: 20px;
`;

export const Answer = styled.div`
	display: flex;
	align-items: center;
	& > p {
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 10px;
		font-family: ${fontFamilies.poppins};
		font-size: 13px;
	}
	& :nth-child(1) {
		font-weight: ${fontWeights.bold};
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	& :nth-child(2) {
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		flex: 1;
	}
`;
