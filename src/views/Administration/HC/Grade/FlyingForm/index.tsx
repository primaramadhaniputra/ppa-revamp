import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { InputContainer } from "./styles";

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
			title="Add / Edit Grade"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInput={true} title={"Grade"} maxLableWidth="70px" />
				<UltimateInput isInput={true} title={"Basic"} maxLableWidth="70px" type="number" />
				<UltimateInput isInput={true} title={"Overtime"} maxLableWidth="70px" type="number" />
				<UltimateInput isInput={true} title={"UDL"} maxLableWidth="70px" type="number" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
