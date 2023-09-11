import { Button, Grid, Text } from "@hudoro/neron";
import { IcEdit, IcPlus } from "atoms/Icon";
import React, { useState } from "react";
import Jabatan from "../Jabatan";
import { StyledInput } from "./styles";
import Questions from "./Questions";

const SurveyBagian = () => {
	const [title, setTitle] = useState("");
	const [deskripsi, setDeskripsi] = useState("");

	const [totalQuetion, setTotalQuetion] = useState(1)


	const handleAddTotalQuestion = () => {
		setTotalQuetion(prev => prev + 1)
	}

	return (
		<>
			<Grid container flexDirection="column" gap={8}>
				<Grid container gap={10} alignItems="center" justifyContent="space-between">
					<Text variant="mute">Bagian 1 dari 1</Text>
					<Grid container alignItems="center" gap={3}>
						<Button
							style={{ borderRadius: "50%", padding: "1px 5px", borderWidth: "2px" }}
							variant="secondary"
							onClick={handleAddTotalQuestion}
						>
							<IcPlus width={10} />
						</Button>
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
					<StyledInput
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
						style={{
							width: `${title.length}ch`,
							minWidth: "120px",
							maxWidth: "250px",
							fontWeight: "bold",
						}}
						placeholder="Judul Bagian..."
					/>
					<IcEdit width={16} color="#55b434" />
				</Grid>
				<Grid
					container
					alignItems="center"
					gap={5}
					style={{ backgroundColor: "#E0F7FC ", width: "100%", padding: "0 16px" }}
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
						placeholder="Form Deskripsi..."
					/>
					<IcEdit width={16} color="#55b434" />
				</Grid>
			</Grid>
			<Jabatan />
			{
				new Array(totalQuetion).fill(0).map((_, idx) =>
					<Questions key={idx} />
				)
			}
		</>
	);
};

export default SurveyBagian;
