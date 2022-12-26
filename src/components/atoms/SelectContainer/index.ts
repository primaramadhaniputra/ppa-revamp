import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";
import { fontSizing } from "utils/styles";

const SelectContainer = styled.div`
	margin: 25px 0;
	position: relative;
	& * {
		font-family: ${fontFamilies.poppins};
		font-size: 12px;
	}
	& label {
		margin-bottom: 5px;
		display: block;
		font-family: ${fontFamilies.poppins};
		font-size: ${fontSizing.sm.fontSize};
	}
`;

export default SelectContainer;
