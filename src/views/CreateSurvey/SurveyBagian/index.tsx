import { Grid, Text } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import React, { useState } from "react";
import Jabatan from "../Jabatan";
import ReactSlider from "react-slider";
import { StyledCard, StyledInput } from "./styles";
import styles from "./Create.module.css";


const SurveyBagian = () => {
	const [title, setTitle] = useState('')
	const [deskripsi, setDeskripsi] = useState('')
	const [currentValue, setCurrentValue] = useState(0);

	return <>
		<Grid container flexDirection="column" gap={8}>
			<Text variant="mute">Bagian 1 dari 1</Text>
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
		<StyledCard>
			<Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
				<StyledInput
					autoFocus
					onChange={(e) => setTitle(e.target.value)}
					style={{
						width: `${title.length}ch`,
						minWidth: "185px",
						maxWidth: "350px",
						fontWeight: "bold",
						color: "black",
					}}
					placeholder="Berikan Pertanyaan Disini"
				/>
				<IcEdit width={16} color="#55b434" />
			</Grid>
			<Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
				<StyledInput
					autoFocus
					onChange={(e) => setTitle(e.target.value)}
					style={{
						width: `${title.length}ch`,
						minWidth: "290px",
						maxWidth: "350px",
						fontSize: "12px",
					}}
					placeholder="Tambahkan deskripsi pertanyaan mu (optional)"
				/>
				<IcEdit width={16} color="#55b434" />
				<ReactSlider
					className={styles.customSlider}
					trackClassName={`${styles["customSlider-track"]} ${styles["customSlider-track-0"]}`}
					thumbClassName={styles["customSlider-thumb"]}
					markClassName={styles["customSlider-mark"]}
					marks
					min={0}
					max={10}
					defaultValue={0}
					value={currentValue}
					onChange={(value) => setCurrentValue(value)}
					renderMark={(props: any) => {
						if (props.key < currentValue) {
							// props.className = "customSlider-mark customSlider-mark-before";
							props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-before"]}`;
						} else if (props.key === currentValue) {
							// props.className = "customSlider-mark customSlider-mark-active";
							props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-active"]}`;
						}
						return <span {...props} />;
					}}
					renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
				/>
			</Grid>
		</StyledCard>
	</>;
};

export default SurveyBagian;
