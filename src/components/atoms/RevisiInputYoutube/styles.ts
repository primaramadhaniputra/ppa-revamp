import styled from "styled-components";

export const Wrapper = styled.div`
	min-width: 200px;
	display: flex;
	align-items: flex-end;
	gap: 10px;
	position: relative;
	width: 100%;
`;

export const FormGroup = styled.div`
	position: relative;
	/* padding: 10px 0 0; */
	width: 100%;
`;

export const FormField = styled.input`
	font-family: Poppins;
	width: 100%;
	border: 0;
	border-bottom: 2px solid #e0e1e0;
	outline: 0;
	font-size: 16px;
	color: black;
	/* padding: 7px 0; */
	background: transparent;
	transition: border-color 0.2s;

	&::placeholder {
		color: transparent;
	}

	&:placeholder-shown ~ label {
		/* font-size: 1rem; */
		cursor: text;
		top: 10px;
	}

	/* &:focus {
		padding-bottom: 6px;
		font-weight: 700;
		border-width: 3px;
		border-image: linear-gradient(to right, #ff0062, #00ffff);
		border-image-slice: 1;
	} */

	&:focus ~ label {
		position: absolute;
		top: -10px;
		display: block;
		transition: 0.2s;
		font-size: 12px;
		/* color: #2afadf; */
		/* font-weight: 700; */
	}
`;

export const FormLabel = styled.label`
	position: absolute;
	top: -10px;
	display: block;
	transition: 0.2s;
	font-size: 12px;
	font-family: Poppins;
	color: rgba(0, 0, 0, 0.7);
`;
