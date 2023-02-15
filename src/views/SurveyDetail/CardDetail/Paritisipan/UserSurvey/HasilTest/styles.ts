import { Grid, Text } from "@hudoro/neron";
import styled from "styled-components";

interface IProps {
	activeQuestionTab?: boolean;
}

export const Container = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	padding: 16px 32px;
	display: grid;
	grid-template-columns: 36px 1fr;
	gap: 18px;
	margin-top: 24px;
`;

export const IconContainer = styled.div`
	background: #016670;
	border-radius: 5px;
	padding: 9px 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: max-content;
`;

export const Title = styled(Text).attrs({
	variant: "h4",
})`
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	color: #000000;
	margin-top: 3px;
`;

export const Content = styled.article`
	margin-top: 34px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const QuestionContainer = styled.div<IProps>`
	padding-bottom: 16px;
	border-bottom: ${(props) => (props.activeQuestionTab ? "none" : "1px solid black")};
	max-height: 300px;
	transition: 0.3s;
	overflow: hidden;
`;

export const QuestionType = styled(Text).attrs({ variant: "h4" })`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;

export const StyledText = styled(Text).attrs({
	variant: "h4",
})`
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
`;

export const SingleQuestionsContainer = styled.div`
	padding-left: 31px;
	max-height: 300px;
	overflow-y: scroll;
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	& {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
`;

export const SingleQuestions = styled(Grid).attrs({
	container: true,
	alignItems: "center",
	justifyContent: "space-between",
})`
	padding: 0 8px 8px;
	border-bottom: 1px solid #cdcdcd;
`;
