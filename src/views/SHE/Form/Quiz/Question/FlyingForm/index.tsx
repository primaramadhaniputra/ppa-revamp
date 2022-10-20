import { Grid, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import {
	Answer,
	AnswerWrapper,
	HeaderTextContainer,
	InputContainer,
	Styledinput,
	StyledLabel,
} from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
		>
			<HeaderTextContainer>
				<Text variant="h4">Form Update Question Quiz</Text>
			</HeaderTextContainer>
			<InputContainer>
				<Grid container gap={10} flexDirection="column">
					<StyledLabel>Subject Name</StyledLabel>
					<Grid>
						<Styledinput />
					</Grid>
				</Grid>
				<Grid container flexDirection="column" gap={10}>
					<StyledLabel>Question No.1</StyledLabel>
					<Grid>
						<Styledinput value="Selebrasi ronaldo" />
					</Grid>
				</Grid>
				<AnswerWrapper>
					<Answer>
						<Text variant="p">A</Text>
						<Text variant="p">siuuuuuuuuuuuuuuuuuu</Text>
					</Answer>
					<Answer>
						<Text variant="p">B</Text>
						<Text variant="p">siiiuuuuuuuuuuuuuuuuu</Text>
					</Answer>
				</AnswerWrapper>
				<AnswerWrapper>
					<Answer>
						<Text variant="p">C</Text>
						<Text variant="p">suuwiiiiiiiiiiii</Text>
					</Answer>
					<Answer>
						<Text variant="p">D</Text>
						<Text variant="p">suwwwiiiiiiiiiiiii</Text>
					</Answer>
				</AnswerWrapper>
				<AnswerWrapper>
					<Answer>
						<Text variant="p" style={{ color: "green" }}>
							Answer
						</Text>
						<Text variant="p">suwwwiiiiiiiiiiiii</Text>
					</Answer>
				</AnswerWrapper>
			</InputContainer>
			<Grid>
				<StyledButton style={{ borderRadius: "0" }}>Update</StyledButton>
			</Grid>
		</LayoutOverlayData>
	);
}
