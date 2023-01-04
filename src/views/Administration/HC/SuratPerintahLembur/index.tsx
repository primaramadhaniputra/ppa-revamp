import { Grid } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { TitleText, WrapperTitle } from "../../styles";
import TopFilter from "src/components/organism/TopFilter";
import UltimateInput from "src/components/organism/UltimateInput";
import { IcEdit } from "atoms/Icon";
import { colors } from "utils/styles";
import FlyingForm from "./FlyingForm";
import { Person } from "utils/interfaces";
import LayoutTable from "src/components/layouts/LayoutTable";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["Date"]: "",
		["Nrp"]: "",
		["Name"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Roster"]: "",
		["Start"]: "",
		["Finish"]: "",
		["Tugas"]: "",
		["Approved By"]: "",
		["Approved Date"]: "",
		["Action"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function SuratPerintahLembur() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);
	const [isShowDetail, setIsShowDetail] = React.useState(false);
	const [formPosition, setformPosition] = React.useState(0);

	const handleShowDetail = (target: { pageY: number; clientY: number }) => {
		setIsShowDetail(true);
		setformPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: (info) =>
			info.column.id === "Action" ? (
				<IcEdit width={14} color={colors.blue} cursor="pointer" onClick={handleShowDetail} />
			) : (
				info.getValue()
			),
		footer: info => info.column.id,
	})
	)

	return (
		<>
			<FlyingForm
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
			/>
			<WrapperTitle>
				<TitleText>Surat Perintah Lembur</TitleText>
			</WrapperTitle>
			<TopFilter>
				<Grid>
					<UltimateInput isInputSelect={true} title="Dept" maxLableWidth="30px" />
				</Grid>
			</TopFilter>
			<LayoutTable>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</LayoutTable>
		</>
	);
}
