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
			title="Add / Edit Plafon"
			button={true}
		>
			<InputContainer>
				<UltimateInput isInputSelect={true} title={"Nama"} />
				<UltimateInput isInput={true} title={"Plafon 2021(Rp)"} type="number" />
				<UltimateInput isInput={true} title={"Plafon 2022(Rp)"} type="number" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
