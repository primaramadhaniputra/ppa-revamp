import { Grid, Icon } from "@hudoro/neron";
import { IcScrollCheck } from "atoms/Icon";
import React, { useRef, useState } from "react";
import { IUserDetailPartisipanQuestions } from "utils/interfaces";
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

interface IProps {
	detailPartisipan: IUserDetailPartisipanQuestions[];
}

const HasilTest = ({ detailPartisipan }: IProps) => {
	const [activeQuestionTab, setActiveQuestionTab] = useState(-1);
	const [activeQuestionTabHeight, setActiveQuestionTabHeight] = useState(41);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleChangeActiveTab = (idx: number) => {
		setActiveQuestionTabHeight(41);
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
					{detailPartisipan.map((item, index) => {
						return (
							item.name !== "KRITIK & SARAN" && (
								<QuestionContainer
									key={index}
									activeQuestionTab={activeQuestionTab === index}
									style={{ height: activeQuestionTab === index ? activeQuestionTabHeight : "41px" }}
								>
									<Grid container alignItems="center" justifyContent="space-between">
										<QuestionType>{item.name}</QuestionType>
										<Icon
											iconName={activeQuestionTab === index ? "IcArrowUp" : "IcArrowDown"}
											size={16}
											style={{ cursor: "pointer" }}
											onClick={() => handleChangeActiveTab(index)}
										/>
									</Grid>
									<SingleQuestionsContainer ref={containerRef}>
										{item.questions.map((data) => (
											<SingleQuestions key={data.id}>
												<StyledText>{data.name}</StyledText>
												<StyledText>{data.answer.value}</StyledText>
											</SingleQuestions>
										))}
									</SingleQuestionsContainer>
								</QuestionContainer>
							)
						);
					})}
				</Content>
			</Grid>
		</Container>
	);
};

export default HasilTest;
