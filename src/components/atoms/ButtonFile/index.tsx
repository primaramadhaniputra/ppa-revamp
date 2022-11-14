import React from "react";
import { FileContainer } from "./styles";

interface IProps {
	title: String;
}

const ButtonFile = ({ title }: IProps) => {
	return (
		<FileContainer>
			<label htmlFor="file"> +</label>
			<label htmlFor="file">{title}</label>
		</FileContainer>
	);
};

export default ButtonFile;
