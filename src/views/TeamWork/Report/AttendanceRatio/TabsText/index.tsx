import React from "react";
import { StyledText, Wrapper } from "./styles";

const text = ["Individual", "Department", "Manpower", "YTD"];

interface IProps {
	activeTabs: number;
	setActiveTabs: React.Dispatch<React.SetStateAction<number>>;
	styles?: React.CSSProperties;
}

export default function TabsText({ activeTabs, setActiveTabs, styles }: IProps) {
	return (
		<Wrapper style={{ ...styles }}>
			{text.map((item, index) => (
				<StyledText
					className={activeTabs === index ? "active" : ""}
					key={index}
					onClick={() => setActiveTabs(index)}
				>
					{item}
				</StyledText>
			))}
		</Wrapper>
	);
}
