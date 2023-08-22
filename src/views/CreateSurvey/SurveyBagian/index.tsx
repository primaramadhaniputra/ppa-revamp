import { Button, Grid, Text } from "@hudoro/neron";
import { IcEdit, IcEqual, IcPlus } from "atoms/Icon";
import React, { useState } from "react";
import Jabatan from "../Jabatan";
import ReactSlider from "react-slider";
import { PopUpContainer, StyledButtonElipse, StyledCard, StyledInput } from "./styles";
import styles from "./Create.module.css";

const SurveyBagian = () => {
	const [title, setTitle] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [currentValue, setCurrentValue] = useState(0);
	const [showPopup, setShowPopup] = useState(false);

	return (
		<>
			<Grid container flexDirection="column" gap={8}>
				<Grid container gap={10} alignItems="center" justifyContent="space-between">
					<Text variant="mute">Bagian 1 dari 1</Text>
					<Grid container alignItems="center" gap={2}>
						<Button style={{ borderRadius: "50%", padding: '2px 4px', borderWidth: '2px' }} variant="secondary">
							<IcPlus width={10} />
						</Button>
						<Button style={{ borderRadius: "50%", padding: '2px 4px', borderWidth: '2px' }} variant="secondary">
							<IcEqual width={10} />
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
					<Grid
						gap={37}
						justifyContent="space-between"
						container
						flexDirection="row"
						style={{ width: "100%" }}
					>
						<div style={{ flex: "2" }}>
							<ReactSlider
								className={styles.customSlider}
								trackClassName={`${styles["customSlider-track"]} ${styles["customSlider-track-0"]}`}
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
									console.log("propss", props);
									return (
										<span {...props} className={`${props.className} ${styles["show-value"]}`}>
											{props.key}
										</span>
									);
								}}
								renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
							/>
						</div>
						<div style={{ position: "relative" }}>
							<StyledButtonElipse onClick={() => setShowPopup(!showPopup)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.3342 1.25H5.66518C2.64418 1.25 0.750183 3.389 0.750183 6.416V14.584C0.750183 17.611 2.63418 19.75 5.66518 19.75H14.3332C17.3642 19.75 19.2502 17.611 19.2502 14.584V6.416C19.2502 3.389 17.3642 1.25 14.3342 1.25Z"
										fill="white"
										stroke="#141BBE"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.9394 10.5127H13.9484H13.9394Z"
										fill="white"
									/>
									<path
										d="M13.9394 10.5127H13.9484"
										stroke="#141BBE"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.93038 10.5127H9.93938H9.93038Z"
										fill="white"
									/>
									<path
										d="M9.93038 10.5127H9.93938"
										stroke="#141BBE"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.9214 10.5127H5.9304H5.9214Z"
										fill="white"
									/>
									<path
										d="M5.9214 10.5127H5.9304"
										stroke="#141BBE"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</StyledButtonElipse>
							{showPopup && (
								<PopUpContainer>
									<div
										style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
									>
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="24"
												viewBox="0 0 25 24"
												fill="none"
											>
												<path
													d="M20.7152 9.56544C20.145 9.56786 19.5909 9.75859 19.1358 10.1091C18.6807 10.4596 18.349 10.9511 18.1904 11.5099H15.0248C14.8654 10.9539 14.5337 10.4656 14.0793 10.1181C13.625 9.77071 13.0726 9.58293 12.5048 9.58293C11.9371 9.58293 11.3846 9.77071 10.9303 10.1181C10.4759 10.4656 10.1442 10.9539 9.98481 11.5099H6.80961C6.63592 10.8884 6.24791 10.3519 5.71709 9.99928C5.18627 9.64668 4.54844 9.50176 3.92116 9.59124C3.29388 9.68071 2.71944 9.99856 2.30373 10.4862C1.88802 10.9738 1.65906 11.5983 1.65906 12.2446C1.65906 12.8909 1.88802 13.5154 2.30373 14.0031C2.71944 14.4907 3.29388 14.8085 3.92116 14.898C4.54844 14.9875 5.18627 14.8426 5.71709 14.49C6.24791 14.1374 6.63592 13.6008 6.80961 12.9793H9.97521C10.1346 13.5353 10.4663 14.0237 10.9207 14.3711C11.375 14.7185 11.9275 14.9063 12.4952 14.9063C13.063 14.9063 13.6154 14.7185 14.0697 14.3711C14.5241 14.0237 14.8558 13.5353 15.0152 12.9793H18.1904C18.3243 13.4585 18.5865 13.89 18.9475 14.2255C19.3085 14.561 19.7541 14.7871 20.2341 14.8784C20.7141 14.9697 21.2095 14.9227 21.6648 14.7425C22.12 14.5623 22.517 14.2562 22.8111 13.8585C23.1053 13.4608 23.2849 12.9873 23.3298 12.4911C23.3748 11.995 23.2832 11.4959 23.0655 11.05C22.8477 10.604 22.5125 10.2288 22.0973 9.96656C21.6821 9.70432 21.2035 9.56541 20.7152 9.56544Z"
													fill="#141BBE"
												/>
											</svg>
										</div>
										<div>
											<p>Skala</p>
										</div>
									</div>
									<div
										style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
									>
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="24"
												viewBox="0 0 25 24"
												fill="none"
											>
												<circle cx="12.5" cy="12" r="12" fill="#ECEDFF" />
												<circle cx="12.5" cy="12" r="7" fill="#898AA0" />
											</svg>
										</div>
										<div>
											<p>Jawaban Singkat</p>
										</div>
									</div>
								</PopUpContainer>
							)}
						</div>
					</Grid>
				</Grid>
			</StyledCard>
		</>
	);
};

export default SurveyBagian;
