import { Grid, Text } from "@hudoro/neron";
import React, { useMemo } from "react";
import {
	createColumnHelper,
} from "@tanstack/react-table";
import { WrapperTable } from "../../../../styles";
import StyledButton from "atoms/StyledButton";
import UpdatePkwt from "./UpdatePkwt";
import NewHiring from "./NewHiring";
import LeadTimePenilaian from "./LeadtimePenilaian";
import { Person } from "utils/interfaces";
import MigrateTable from "src/components/organism/MigrateTable";

const arr = new Array(1).fill(0);
export const defaultDataTable = arr.map(() => {
	return {
		["NRP"]: "",
		["Nama"]: "",
		["Dept"]: "",
		["Posisi"]: "",
		["Status"]: "",
		["Kontrak 1 awal"]: "",
		["Kontrak 1 berakhir"]: "",
		["Kontrak 2 awal"]: "",
		["Kontrak 2 berakhir"]: "",
		["Kontrak 3 awal"]: "",
		["Kontrak 3 berakhir"]: "",
		["Permanen"]: "",
	};
});

const columnHelper = createColumnHelper<Person>()

export default function TableMasaPkwtKaryawan() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const [isShowUpdatePkwt, setIsShowUpdatePkwt] = React.useState(false);
	const [formUpdatePkwtPosition, setFormUpdatePkwtPosition] = React.useState(0);

	const handleShowUpdatePkwt = (target: { pageY: number; clientY: number }) => {
		setIsShowUpdatePkwt(true);
		setFormUpdatePkwtPosition(target.pageY - target.clientY);
	};

	const [isShowNewHiring, setIsShowNewHiring] = React.useState(false);
	const [formNewHiringPosition, setFormNewHiringPosition] = React.useState(0);

	const handleShowNewHiring = (target: { pageY: number; clientY: number }) => {
		setIsShowNewHiring(true);
		setFormNewHiringPosition(target.pageY - target.clientY);
	};
	const [isShowLeadTimePenilaian, setIsShowLeadTimePenilaian] = React.useState(false);
	const [formLeadTimePenilaianPosition, setFormLeadTimePenilaianPosition] = React.useState(0);

	const handleShowLeadTimePenilaian = (target: { pageY: number; clientY: number }) => {
		setIsShowLeadTimePenilaian(true);
		setFormLeadTimePenilaianPosition(target.pageY - target.clientY);
	};

	const columns = objTitle.map((item) => columnHelper.accessor(item, {
		header: () => item,
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	})
	);

	return (
		<>
			<UpdatePkwt
				isShowUpdatePkwt={isShowUpdatePkwt}
				setIsShowUpdatePkwt={setIsShowUpdatePkwt}
				formUpdatePkwtPosition={formUpdatePkwtPosition}
			/>
			<NewHiring
				isShowNewHiring={isShowNewHiring}
				setIsShowNewHiring={setIsShowNewHiring}
				formNewHiringPosition={formNewHiringPosition}
			/>
			<LeadTimePenilaian
				isShowLeadTimePenilaian={isShowLeadTimePenilaian}
				setIsShowLeadTimePenilaian={setIsShowLeadTimePenilaian}
				formLeadTimePenilaianPosition={formLeadTimePenilaianPosition}
			/>
			<WrapperTable>
				<Text variant="h4" style={{ marginBottom: "20px", textAlign: "center", fontWeight: 500 }}>
					DAFTAR MASA PKWT KARYAWAN
				</Text>
				<Grid container justifyContent="space-between" gap={20} style={{ marginBottom: "20px" }}>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton style={{ backgroundColor: "#001F3F" }} onClick={handleShowUpdatePkwt}>
							📝 Update Pkwt
						</StyledButton>
					</Grid>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton style={{ backgroundColor: "#D81B60" }} onClick={handleShowNewHiring}>
							✉ New Hiring
						</StyledButton>
					</Grid>
					<Grid style={{ minWidth: "150px" }}>
						<StyledButton onClick={handleShowLeadTimePenilaian}>👁 Leadtime Penilaian</StyledButton>
					</Grid>
				</Grid>
				<MigrateTable data={defaultDataTable} columns={columns} />
			</WrapperTable>
		</>
	);
}
