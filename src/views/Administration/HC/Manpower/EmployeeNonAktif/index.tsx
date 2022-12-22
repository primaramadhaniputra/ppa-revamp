import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const items = [
	{
		id: "0",
		label: "Non Aktif(PHK) ",
		values: "Non Aktif(PHK)",
	},
	{
		id: "1",
		label: "Mutasi Antar Site",
		values: "Mutasi Antar Site",
	},
];

const KaryawanAktif = dynamic(() => import("./KaryawanAktif"), { ssr: false });
const KaryawanNonAktif = dynamic(() => import("./KaryawanNonAktif"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "Non Aktif(PHK)") {
		return <KaryawanAktif />;
	} else if (type === "Mutasi Antar Site") {
		return <KaryawanNonAktif />;
	}
};

const EmployeeNonAktif = () => {
	const [activeSelect, setActiveSelect] = useState("Karyawan Aktif");

	const handleSelect = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveSelect(e?.values);
	};

	return (
		<>
			<Grid container justifyContent="center">
				<Grid style={{ maxWidth: "240px" }}>
					<Select items={items} defaultValue={items[0]} onChange={handleSelect} />
				</Grid>
			</Grid>
			{renderContent(activeSelect)}
		</>
	);
};

export default EmployeeNonAktif;
