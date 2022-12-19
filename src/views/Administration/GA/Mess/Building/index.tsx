import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const items = [
	{
		id: "0",
		label: "Kamar",
		values: "Kamar",
	},
	{
		id: "1",
		label: "Blok",
		values: "Blok",
	},
	{
		id: "2",
		label: "Room Type",
		values: "Room Type",
	},
];

const KamarView = dynamic(() => import("./Kamar"), { ssr: false });
const BlokView = dynamic(() => import("./Blok"), { ssr: false });
const RoomTypeView = dynamic(() => import("./RoomType"), { ssr: false });

const renderSelect = (type: string) => {
	if (type === "Kamar") {
		return <KamarView />;
	} else if (type === "Blok") {
		return <BlokView />;
	} else if (type === "Room Type") {
		return <RoomTypeView />;
	}
};

const Building = () => {
	const [activeSelect, setActiveSelect] = useState("Kamar");

	const handleChangeSelect = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveSelect(e?.values);
	};

	return (
		<>
			<Grid container justifyContent="center">
				<Grid style={{ maxWidth: "200px" }}>
					<Select items={items} defaultValue={items[0]} onChange={handleChangeSelect} />
				</Grid>
			</Grid>
			<Grid style={{ marginTop: "30px" }}>{renderSelect(activeSelect)}</Grid>
		</>
	);
};

export default Building;
