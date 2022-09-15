import { Grid, Icon, Text } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import {
	Answer,
	AnswerWrapper,
	Container,
	HeaderTextContainer,
	InputContainer,
	Styledinput,
	StyledLabel,
	Wrapper,
} from "./styles";

interface IProps {
	closeForm: () => void;
	isEdit?: boolean;
	formPosition: number;
}

export default function FlyingForm({ closeForm, isEdit, formPosition }: IProps) {
	return (
		<Wrapper
			style={{
				opacity: isEdit ? "1" : "0",
				zIndex: isEdit ? "999" : "-999",
				top: `${formPosition}px`,
			}}
		>
			<Container style={{ transform: isEdit ? "translateY(0)" : "translateY(-15%)" }}>
				<HeaderTextContainer>
					<Text variant="h4">Form Update Question Quiz</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={closeForm} />
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
			</Container>
		</Wrapper>
	);
}
