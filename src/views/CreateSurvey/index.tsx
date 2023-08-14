import React, { useState } from "react";
import IcBuilding from "atoms/Icon/IcBuilding";
import { Button, Grid, Text, Toggler } from "@hudoro/neron";
import { IcEdit, IcFilter } from "atoms/Icon";
import { BreadCrumb, StyledCard, StyledInput } from "./styles";
import ReactSlider from "react-slider";
import styles from './Create.module.css'

const CreateSurvey = () => {
	const [title, setTitle] = useState(" ");
	const [deskripsi, setDeskripsi] = useState(" ");
	const [currentValue, setCurrentValue] = useState(0);


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
						<Toggler />
					</Grid>
					<Grid container alignItems="center">
						<Text variant="p" style={{ width: "80px" }}>
							Eksternal
						</Text>
						<Toggler />
					</Grid>
				</Grid>
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
				<Grid>
					<Button variant="primary" style={{ backgroundColor: '#141bbe', borderRadius: "6px" }}>
						<Grid container alignItems="center" gap={4}>
							<span>Jabatan</span>
							<IcFilter width={14} />
						</Grid>
					</Button>
				</Grid>
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
								color: 'black'
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
								fontSize: '12px'
							}}

							placeholder="Tambahkan deskripsi pertanyaan mu (optional)"
						/>
						<IcEdit width={16} color="#55b434" />
						<ReactSlider
							className={styles.customSlider}
							trackClassName={`${styles['customSlider-track']}`}
							thumbClassName={styles['customSlider-thumb']}
							markClassName={styles['customSlider-mark']}
							marks
							min={0}
							max={10}
							defaultValue={0}
							value={currentValue}
							onChange={(value) => setCurrentValue(value)}
							renderMark={(props: any) => {
								if (props.key < currentValue) {
									// props.className = "customSlider-mark customSlider-mark-before";
									props.className = `${styles['customSlider-mark']} ${styles['customSlider-mark-before']}`;
								} else if (props.key === currentValue) {
									// props.className = "customSlider-mark customSlider-mark-active";
									props.className = `${styles['customSlider-mark']} ${styles['customSlider-mark-active']}`;
								}
								return <span {...props} />;
							}}
							renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
						/>
						{/* <ReactSlider
							className={styles['horizontal-slider']}
							marks
							markClassName={styles['example-mark']}
							min={0}
							max={9}
							thumbClassName={styles['example-thumb']}
							trackClassName={styles['example-track']}
							
						/> */}
					</Grid>
				</StyledCard>
			</Grid>
		</div>
	);
};

export default CreateSurvey;
