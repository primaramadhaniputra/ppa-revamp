import { Grid, Icon } from "@hudoro/neron";
import { IcScrollCheck } from "atoms/Icon";
import React, { useRef, useState } from "react";
import {
	Container,
	Content,
	IconContainer,
	QuestionContainer,
	QuestionType,
	SingleQuestions,
	SingleQuestionsContainer,
	StyledText,
	Title,
} from "./styles";

const ar = new Array(3).fill(0);

const HasilTest = () => {
	const [activeQuestionTab, setActiveQuestionTab] = useState(-1);
	const [activeQuestionTabHeight, setActiveQuestionTabHeight] = useState(41);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleChangeActiveTab = (idx: number) => {
		const height = containerRef.current?.getBoundingClientRect().height || 0;
		if (activeQuestionTab === idx) {
			setActiveQuestionTab(-1);
			return setActiveQuestionTabHeight(41);
		}
		setActiveQuestionTabHeight((value) => value + height);
		return setActiveQuestionTab(idx);
	};

	return (
		<Container>
			<IconContainer>
				<IcScrollCheck width={24} />
			</IconContainer>
			<Grid>
				<Title>Hasil Test</Title>
				<Content>
					{ar.map((_, index) => (
						<QuestionContainer
							key={index}
							activeQuestionTab={activeQuestionTab === index}
							style={{ height: activeQuestionTab === index ? activeQuestionTabHeight : "41px" }}
						>
							<Grid container alignItems="center" justifyContent="space-between">
								<QuestionType>SHE</QuestionType>
								<Icon
									iconName={activeQuestionTab === index ? "IcArrowUp" : "IcArrowDown"}
									size={16}
									style={{ cursor: "pointer" }}
									onClick={() => handleChangeActiveTab(index)}
								/>
							</Grid>
							<SingleQuestionsContainer ref={containerRef}>
								<SingleQuestions>
									<StyledText>Safety</StyledText>
									<StyledText>2</StyledText>
								</SingleQuestions>
								<SingleQuestions>
									<StyledText>Safety</StyledText>
									<StyledText>2</StyledText>
								</SingleQuestions>
							</SingleQuestionsContainer>
						</QuestionContainer>
					))}
				</Content>
			</Grid>
		</Container>
	);
};

export default HasilTest;
