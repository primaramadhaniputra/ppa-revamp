import TitlePage from "atoms/TitlePage";
import React from "react";
import { fontSizing, fontWeights } from "utils/styles";

const TitleHauler = () => {
	return (
		<TitlePage
			type="h4"
			styles={{
				margin: "30px 0 30px",
				fontSize: fontSizing.md.fontSize,
				fontWeight: fontWeights.bold,
			}}
		>
			Hauler Performance
		</TitlePage>
	);
};

export default TitleHauler;
