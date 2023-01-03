import React, { useMemo } from "react";
import { Wrapper } from "./styles";
import TopFilter from "src/components/organism/TopFilter";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import FlyingForm from "./FlyingForm";
import RevisiDropdown from "atoms/RevisiDropdown";
import { colors } from "utils/styles";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Periode"]: "HD787",
		["NRP"]: "Hd123",
		["Name"]: `Dani Ganteng `,
		["Dept"]: "GL",
		["TOH"]: "1",
		["KTA"]: "1",
		["TTA"]: "1",
		["INS"]: "1",
		["OBS"]: "1",
		["PKR"]: "1",
		["WUC"]: "1",
		["Detail"]: "1",
	};
});

const columnHelper = createColumnHelper<IProps>()

export default function Table() {
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
						<Grid
							container
							justifyContent="center"
							onClick={(target) => handleShowDetail(target)}
						>
							<IcEdit width={18} cursor="pointer" color={colors.primary} />
						</Grid>
					) : (
						info.getValue()
					)}
				</>
			);
		},
		footer: info => info.column.id,
	})
	)

	return (
		<Wrapper>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<TopFilter>
				<Grid style={{ minWidth: "200px" }}>
					<RevisiDropdown placeholder="Ranking" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</Wrapper>
	);
}
