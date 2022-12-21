import { Grid } from "@hudoro/neron";
import React from "react";
import { colors } from "utils/styles";
import { LeftText, RightText, TextContainer } from "./styles";

interface IProps {
	dummyData: {
		title: string;
		desc: string;
	}[];
	maxLabelWidth?: string;
}

const TextBetween = ({ dummyData, maxLabelWidth }: IProps) => {
	return (
		<TextContainer>
			{dummyData.map((item, index) => {
				return (
					<Grid container alignItems="center" gap={5} key={index}>
						<Grid container>
							<RightText
								style={{
									color: item.title === "Leaving Note" ? colors.blue : "black",
									minWidth: maxLabelWidth,
								}}
							>
								{item.title}
							</RightText>
						</Grid>
						<RightText
							style={{
								minWidth: "5px",
								// textDecoration: 'none',
								fontStyle: "inherit",
							}}
						>
							:
						</RightText>
						<Grid>
							<LeftText>{item.desc}</LeftText>
						</Grid>
					</Grid>
				);
			})}
		</TextContainer>
	);
};

export default TextBetween;
