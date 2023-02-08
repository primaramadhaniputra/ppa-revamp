import React, { useMemo } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import LayoutTable from "src/components/layouts/LayoutTable";
import { Grid } from "@hudoro/neron";
import TitleText from "atoms/TitleText";
import ButtonFile from "atoms/ButtonFile";
import FlyingForm from "./FlyingForm";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(1).fill(0).map(() => {
	return {
		Date: "-",
		Filename: "-",
		MP: "-",
		Day: "-",
		Status: "-",
		Remark: "-",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function UploadRoster() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
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
					<TitleText>Upload Roster</TitleText>
					<ButtonFile title="UPLOAD FILE" />
				</Grid>
			</LayoutTable>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
