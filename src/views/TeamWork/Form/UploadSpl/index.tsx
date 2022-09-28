import React from "react";
import { FileContainer, TitleText, Wrapper, WrapperTitle } from "../styles";

export default function UploadSpl() {
	return (
		<Wrapper>
			<WrapperTitle>
				<TitleText>Upload SPL</TitleText>
				<FileContainer>
					<label htmlFor="file"> +</label>
					<label htmlFor="file"> UPLOAD FILE</label>
					<input type="file" id="file" hidden />
				</FileContainer>
			</WrapperTitle>
		</Wrapper>
	);
}