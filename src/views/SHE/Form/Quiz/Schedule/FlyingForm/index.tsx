import { Text } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { Answer, AnswerWrapper, InputContainer } from "./styles";

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
				<UltimateInput isInput={true} title="Question No.1" maxLableWidth="120px" />
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
		</LayoutOverlayData>
	);
}
