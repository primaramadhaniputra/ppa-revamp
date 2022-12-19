import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const items = [
	{
		id: "0",
		label: "Karyawan Aktif",
		values: "Karyawan Aktif",
	},
	{
		id: "1",
		label: "Karyawan Non Aktif",
		values: "Karyawan Non Aktif",
	},
];

const KaryawanAktif = dynamic(() => import("./KaryawanAktif"), { ssr: false });
const KaryawanNonAktif = dynamic(() => import("./KaryawanNonAktif"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "Karyawan Aktif") {
		return <KaryawanAktif />;
	} else if (type === "Karyawan Non Aktif") {
		return <KaryawanNonAktif />;
	}
};

const Plafon = () => {
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

export default Plafon;
