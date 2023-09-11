import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Button, Grid } from "@hudoro/neron";
import { BreadCrumb } from "./styles";
import SurveyBagian from "./SurveyBagian";
import FormHeader from "./FormHeader";

const CreateSurvey = () => {
	const [totalQuestionSection, setTotalQuestionSection] = useState(1);

	const handleAddTotalSectionQuestion = () => {
		setTotalQuestionSection((prev) => prev + 1);
	};

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
				<FormHeader />
				<Grid container gap={18} flexDirection="column">
					<Button
						style={{ borderWidth: "2px", borderColor: "#141bbe", color: "#141bbe" }}
						variant="secondary"
						onClick={handleAddTotalSectionQuestion}
					>
						Tambah Bagian
					</Button>
					{new Array(totalQuestionSection).fill(0).map((_, idx) => (
						<SurveyBagian key={idx} />
					))}
					<Button variant="primary" style={{ backgroundColor: "#141bbe", borderRadius: "6px" }}>
						Kirim
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default CreateSurvey;
