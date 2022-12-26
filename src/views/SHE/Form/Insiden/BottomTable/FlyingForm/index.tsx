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
			title="Tambahkan Data Insiden"
			button={true}
		>
			<InputContainer>
				<UltimateInput isDate={true} title="Tgl. Kejadian" />
				<UltimateInput isInputSelect={true} title="Perusahaan" />
				<UltimateInput isInput={true} title="Nama Korban" />
				<UltimateInput isInputSelect={true} title="Kategori Kecelakaan" />
				<UltimateInput isInput={true} title="Kerugian" />
				<UltimateInput isInput={true} title="Deskripsi" />
				<UltimateInput isInput={true} title="Upload Dokumen" type={"file"} />
			</InputContainer>
		</LayoutOverlayData>
	);
}
