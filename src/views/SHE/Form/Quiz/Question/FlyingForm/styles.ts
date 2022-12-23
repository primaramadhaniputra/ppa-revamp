import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const AnswerWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
	gap: 20px;
`;
