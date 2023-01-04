import React, { useMemo } from "react";
import TopFilter from "src/components/organism/TopFilter";
import { createColumnHelper } from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import ShowDetail from "./ShowDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const columnHelper = createColumnHelper<IProps>();

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		["Dept"]: `33${index}`,
		["Kode Unit"]: `33${index}`,
		Shift: "2022-17-08",
		Date: "123",
		Status: "123",
		["Atasan Status"]: "123",
		["Detail"]: "123",
	};
});

export default function Detail() {
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
				return (
					<>
						{info.column.id === "Detail" ? (
							<Grid container justifyContent="center">
								<IcEye
									width={18}
									style={{ cursor: "pointer" }}
									color={colors.primary}
									onClick={handleShowDetail}
								/>
							</Grid>
						) : (
							info.getValue()
						)}
					</>
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TopFilter />
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
