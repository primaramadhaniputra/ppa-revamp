import React from "react";
import { FileContainer } from "./styles";

interface IProps {
	title: string;
	onClick?: () => any;
}

const ButtonFile = ({ title, onClick }: IProps) => {
	return (
		<FileContainer onClick={onClick}>
			<label htmlFor="file"> +</label>
			<label htmlFor="file">{title}</label>
		</FileContainer>
	);
};

export default ButtonFile;
