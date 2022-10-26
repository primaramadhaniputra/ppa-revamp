import { Grid, Icon, Text } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetailTable({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const handleCloseShowDetail = () => {
		setIsShowDetail(false);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					style={{ borderBottom: "1px solid rgba(0,0,0,.1)", paddingBottom: "10px" }}
				>
					<Text variant="h3">AAN FITRINSYAH</Text>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={handleCloseShowDetail} />
				</Grid>
				<Grid container justifyContent="space-around">
					<Grid
						container
						alignItems="center"
						justifyContent="space-around"
						style={{ flex: 1, maxWidth: "400px" }}
					>
						<Text variant="h4">Roster</Text>
						<Text variant="p">Dinas</Text>
					</Grid>
					<Grid
						container
						alignItems="center"
						style={{ flex: 1, maxWidth: "400px" }}
						justifyContent="space-around"
					>
						<Text variant="h4">Location</Text>
						<Text variant="p">100</Text>
					</Grid>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
