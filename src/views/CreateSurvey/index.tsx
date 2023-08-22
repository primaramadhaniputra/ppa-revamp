import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Grid, Text } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import { BreadCrumb, StyledInput } from "./styles";
import SurveyBagian from "./SurveyBagian";
import Toggle from "atoms/Toggle";

const CreateSurvey = () => {
	const [title, setTitle] = useState(" ");
	const [deskripsi, setDeskripsi] = useState(" ");

	return (
		<div>
			<BreadCrumb>
				<li>
					<a href="#">
						<IcBuilding width={24} color="#000" />
					</a>
				</li>
				<li>
					<a href="#">Buat Formulir</a>
				</li>
			</BreadCrumb>
			<Grid container gap={18} flexDirection="column" style={{ maxWidth: "640px", margin: "auto" }}>
				<Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
					<StyledInput
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
						style={{
							width: `${title.length}ch`,
							minWidth: "120px",
							maxWidth: "250px",
							fontSize: "36px",
							fontWeight: "bold",
						}}
						placeholder="TITLE..."
					/>
					<IcEdit width={16} color="#55b434" />
				</Grid>
				<Grid
					container
					alignItems="center"
					gap={5}
					style={{ backgroundColor: "#E0F7FC ", width: "100%", padding: "8px 16px" }}
				>
					<textarea
						onChange={(e) => setDeskripsi(e.target.value)}
						style={{
							width: `${deskripsi.length}ch`,
							minWidth: "115px",
							maxWidth: "96%",
							background: "transparent",
							border: "none",
							outline: "none",
						}}
						placeholder="Survey Deskripsi..."
					/>
					<IcEdit width={16} color="#55b434" />
				</Grid>
				<Grid container gap={8} flexDirection="column" style={{ padding: "0 16px" }}>
					<Grid container alignItems="center">
						<Text variant="p" style={{ width: "80px" }}>
							Internal
						</Text>
						<Toggle id="internal" />
					</Grid>
					<Grid container alignItems="center">
						<Text variant="p" style={{ width: "80px" }}>
							Eksternal
						</Text>
						<Toggle id="eksternal" />
					</Grid>
				</Grid>
				<SurveyBagian />
			</Grid>
		</div>
	);
};

export default CreateSurvey;
