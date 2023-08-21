import { Button, Grid, Text } from "@hudoro/neron";
import React, { useState } from "react";
import { PerusahaanContainer } from "./styles";

const perusahaans = [
	{
		id: 1,
		label: "MHU",
	},
	{
		id: 2,
		label: "BA",
	},
	{
		id: 3,
		label: "PPA",
	},
	{
		id: 4,
		label: "ASM",
	},
];

const Perusahaan = () => {
	const [activeIdPerusahaan, setActiveIdPerusahaan] = useState(1);

	const handleChangeActiveIdPerusahaan = (id: number) => {
		setActiveIdPerusahaan(id);
	};

	return (
		<PerusahaanContainer>
			<Text
				variant="p"
				style={{ fontWeight: "600", borderBottom: "1px solid #ddd", padding: "0 10px 10px 10px " }}
			>
				Perusahaan
			</Text>
			<Grid container flexDirection="column" style={{ padding: "0 10px 10px 10px " }}>
				{perusahaans.map((item, idx) => {
					return (
						<Button
							onClick={() => handleChangeActiveIdPerusahaan(item.id)}
							key={idx}
							variant="ghost"
							style={{
								textAlign: "left",
								color: activeIdPerusahaan === item.id ? "blue" : "black",
							}}
						>
							{item.label}
						</Button>
					);
				})}
			</Grid>
		</PerusahaanContainer>
	);
};

export default Perusahaan;
