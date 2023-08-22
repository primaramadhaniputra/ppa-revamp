import { Button, Grid, Text } from "@hudoro/neron";
import { IcEdit, IcEllipse } from "atoms/Icon";
import React, { useState } from "react";
import Jabatan from "../Jabatan";
import ReactSlider from "react-slider";
import { StyledButtonElipse, StyledCard, StyledInput } from "./styles";
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
			<Grid container alignItems="center" gap={32} style={{ width: "100%", padding: "0 16px" }}>
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
				<Grid gap={37} justifyContent="space-between" container flexDirection="row" style={{ width: '100%' }}>
					<div style={{ flex: '2', }}>
						<ReactSlider
							className={styles.customSlider}
							trackClassName={`${styles["customSlider-track"]} ${styles['customSlider-track-0']}`}
							thumbClassName={styles["customSlider-thumb"]}
							markClassName={styles["customSlider-mark"]}
							marks
							min={0}
							max={10}
							defaultValue={1}
							value={currentValue}
							onChange={(value) => setCurrentValue(value)}
							renderMark={(props: any) => {
								if (props.key < currentValue) {
									// props.className = "customSlider-mark customSlider-mark-before";
									props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-before"]} ${styles["customSlider-mark-after"]}`;
								} else if (props.key === currentValue) {
									// props.className = "customSlider-mark customSlider-mark-active";
									props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-active"]}`;
								}
								console.log('propss', props)
								return <span {...props} className={`${props.className} ${styles['show-value']}`}>{props.key}</span>;
							}}
							renderThumb={(props, state) => <div {...props} >{state.valueNow}</div>}
						/>
					</div>
					<div>
						<StyledButtonElipse >
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3342 1.25H5.66518C2.64418 1.25 0.750183 3.389 0.750183 6.416V14.584C0.750183 17.611 2.63418 19.75 5.66518 19.75H14.3332C17.3642 19.75 19.2502 17.611 19.2502 14.584V6.416C19.2502 3.389 17.3642 1.25 14.3342 1.25Z" fill="white" stroke="#141BBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9394 10.5127H13.9484H13.9394Z" fill="white" />
								<path d="M13.9394 10.5127H13.9484" stroke="#141BBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M9.93038 10.5127H9.93938H9.93038Z" fill="white" />
								<path d="M9.93038 10.5127H9.93938" stroke="#141BBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9214 10.5127H5.9304H5.9214Z" fill="white" />
								<path d="M5.9214 10.5127H5.9304" stroke="#141BBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</StyledButtonElipse>
					</div>
				</Grid>
			</Grid>
		</StyledCard>
	</>;
};

export default SurveyBagian;
