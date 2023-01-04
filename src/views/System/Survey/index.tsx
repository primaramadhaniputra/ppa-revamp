import React, { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { fontWeights } from "utils/styles";
import { fontFamilies, Text } from "@hudoro/neron";
import { StyledText } from "./styles";
import DataDetail from "./DataDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface Person {
	[x: string]: any;
}

export const defaultDataTable = new Array(10).fill(0).map(() => {
	return {
		["Dept"]: "COE",
		["MP"]: "123",
		["SUDAH MENGISI"]: "0",
		["ACHIEVEMENT"]: "1",
	};
});

const columnHelper = createColumnHelper<Person>();

export default function Survey() {
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
			cell: (info) => {
				return info.column.id === "MP" ? (
					<StyledText onClick={handleShowDetail}>{info.renderValue()}</StyledText>
				) : (
					info.getValue()
				);
			},
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
			<LayoutTable>
				<Text
					variant="h4"
					style={{
						textAlign: "center",
						fontFamily: fontFamilies.poppins,
						fontWeight: fontWeights.semi,
						marginBottom: "20px",
					}}
				>
					Survey ESG achievment MHU
				</Text>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
