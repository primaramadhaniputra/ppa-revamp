import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { InputContainer } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FormUpdateDate({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Update Tanggal"
			button={true}
		>
			<InputContainer>
				<UltimateInput isDate={true} title={"Tanggal Induksi"} maxLableWidth="150px" />
				<UltimateInput isDate={true} title={"Tanggal Awal Kerja"} maxLableWidth="150px" />
				<UltimateInput isInput={true} title={"Keterangan"} maxLableWidth="150px" />
			</InputContainer>
		</LayoutOverlayData>
	);
}
