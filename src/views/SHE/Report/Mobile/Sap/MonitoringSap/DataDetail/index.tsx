import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Description, Title } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="KT09/SHE/2209/PTTA/01928"
			>
				<Grid style={{ padding: "20px 10px" }}>
					<Grid>
						<Title>Pelapor</Title>
						<Description>Dani ganteng</Description>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
