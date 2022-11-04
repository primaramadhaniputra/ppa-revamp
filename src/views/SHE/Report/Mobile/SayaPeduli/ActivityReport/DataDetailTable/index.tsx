import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import DataDescription from "./DataDescription";
import TabsChanges from "./TabsChanges";
interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetailTable({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="AAN FITRINSYAH"
				width={700}
			>
				<DataDescription />
				<TabsChanges />
			</LayoutOverlayData>
		</>
	);
}
