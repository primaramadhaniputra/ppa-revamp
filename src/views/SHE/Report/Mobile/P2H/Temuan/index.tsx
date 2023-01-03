import React, { useMemo } from "react";
import TopFilter from "src/components/organism/TopFilter";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import RevisiDropdown from "atoms/RevisiDropdown";
import { IcEye } from "atoms/Icon";
import { colors } from "utils/styles";
import ShowDetail from "./ShowDetail";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		Tanggal: "HD787",
		CN: "Hd123",
		["Hazard Code"]: `33${index}`,
		Item: "2022-17-08",
		Remark: "2022-17-08",
		Detail: "",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function Temuan() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) => {
			return (
				<>
					{info.column.id === "Detail" ? (
						<Grid container justifyContent="center">
							<IcEye
								width={18}
								color={colors.primary}
								style={{ cursor: "pointer" }}
								onClick={handleShowDetail}
							/>
						</Grid>
					) : (
						info.renderValue()
					)}
				</>
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<ShowDetail
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Operator" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
