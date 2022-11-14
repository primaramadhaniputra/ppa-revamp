import { Grid } from "@hudoro/neron";
import ButtonFile from "atoms/ButtonFile";
import TitleText from "atoms/TitleText";
import React from "react";
import LayoutTable from "src/components/layouts/LayoutTable";
import FlyingForm from "./FlyingForm";

export default function UploadDar() {
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<LayoutTable style={{ marginTop: "10px" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					onClick={handleShowDetail}
				>
					<TitleText>Upload DAR</TitleText>
					<ButtonFile title="UPLOAD FILE" />
				</Grid>
			</LayoutTable>
		</>
	);
}
