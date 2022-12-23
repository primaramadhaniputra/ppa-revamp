import InputGroup from "molecules/InputGroup";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { colors } from "utils/styles";
import { AnswerWrapper, InputContainer } from "./styles";

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
			title="Form Update Question Quiz"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title="Subject Name" maxLableWidth="120px" />
				<UltimateInput isTextArea={true} title="Question No.1" maxLableWidth="120px" />
				<AnswerWrapper>
					<InputGroup labelTitle="A" />
					<InputGroup labelTitle="B" />
				</AnswerWrapper>
				<AnswerWrapper>
					<InputGroup labelTitle="C" />
					<InputGroup labelTitle="D" />
				</AnswerWrapper>
				<AnswerWrapper>
					<InputGroup labelTitle="Answer" style={{ color: colors.green }} />
				</AnswerWrapper>
			</InputContainer>
		</LayoutOverlayData>
	);
}
