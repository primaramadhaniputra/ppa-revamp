import styled from "styled-components";
import { mediaQueries } from "utils/styles";

export const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
	${mediaQueries.md} {
		padding: 10px;
	}
`;

export const Input = styled.input``;
