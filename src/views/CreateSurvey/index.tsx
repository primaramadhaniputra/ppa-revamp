import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Button, Grid, } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import { BreadCrumb, StyledInput, StyledText } from "./styles";
import SurveyBagian from "./SurveyBagian";
import Toggle from "atoms/Toggle";

const dataType = ["Internal", "Eksternal"];

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
					{dataType.map((item, idx) => {
						return (
							<Grid key={idx} container alignItems="center">
								<Grid container gap={2} style={{ width: "90px" }}>
									<StyledText variant="p">{item}</StyledText>
									<Grid container title={item}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="10"
											viewBox="0 0 14 14"
											fill="none"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M7.00004 0.833008C10.4054 0.833008 13.1667 3.59367 13.1667 6.99967C13.1667 10.405 10.4054 13.1663 7.00004 13.1663C3.59404 13.1663 0.833374 10.405 0.833374 6.99967C0.833374 3.59367 3.59404 0.833008 7.00004 0.833008Z"
												stroke="#008692"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M6.99679 4.46875V7.41475"
												stroke="#008692"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M6.99663 9.5306H7.00329"
												stroke="#008692"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</Grid>
								</Grid>
								<Toggle id={item} />
							</Grid>
						);
					})}
				</Grid>
				<Grid container gap={18} flexDirection="column">
					<SurveyBagian />
					<Button variant="primary" style={{ backgroundColor: "#141bbe", borderRadius: "6px" }}>Kirim</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default CreateSurvey;
