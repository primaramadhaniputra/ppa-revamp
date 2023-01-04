import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../../styles";
import StyledButton from "atoms/StyledButton";
import { fontSizing, fontWeights } from "utils/styles";
import DataDetail from "./DataDetail";
import Upload from "./Upload";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "",
		["Time"]: "",
		["Hauler"]: "",
		["Loader"]: "",
		["Material"]: "",
		["Seam"]: "",
		["Pit"]: "",
		["Production"]: "",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function HPR() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowUpload, setIsShowUpload] = React.useState(false);
	const [formUploadPosition, setformUploadPosition] = React.useState(0);

	const handleShowUpload = (target: { pageY: number; clientY: number }) => {
		setIsShowUpload(true);
		setformUploadPosition(target.pageY - target.clientY);
	};

	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => info.renderValue(),
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<DataDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<Upload
				isShowDetail={isShowUpload}
				setIsShowDetail={setIsShowUpload}
				formPosition={formUploadPosition}
			/>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Hourly Production</TitleText>
				<Grid container gap={10} style={{ maxWidth: "max-content" }}>
					<Grid>
						<StyledButton
							style={{
								fontSize: fontSizing.md.fontSize,
								padding: "5px 10px",
								fontWeight: fontWeights.bold,
							}}
							onClick={handleShowDetail}
						>
							+
						</StyledButton>
					</Grid>
					<Grid>
						<StyledButton
							style={{
								fontSize: fontSizing.md.fontSize,
								padding: "5px 10px",
								fontWeight: fontWeights.bold,
							}}
							onClick={handleShowUpload}
						>
							Upload
						</StyledButton>
					</Grid>
				</Grid>
			</WrapperTitle>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
