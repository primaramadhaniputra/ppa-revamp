import { Checkbox, Grid, Toggler } from "@hudoro/neron";
import RevisiInput from "atoms/RevisiInput";
import StyledButton from "atoms/StyledButton";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { CheckboxContainer, Input, InputContainer, Label } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const [date, setDate] = useState(new Date());
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Upload DAR"
		>
			<InputContainer>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Name</Label>
					</Grid>
					<Grid>
						<RevisiInput value="AGUS EKA PRASETYA" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Marital Status</Label>
					</Grid>
					<Grid>
						<RevisiInput value="K0" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Position</Label>
					</Grid>
					<Grid>
						<RevisiInput value="GROUP LEADER" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Hiring Date</Label>
					</Grid>
					<Grid>
						<RevisiInput value="2019-04-23" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Address</Label>
					</Grid>
					<Grid>
						<RevisiInput value="DUSUN MANTING RT 018 RW 003 KELURAHAN TAWANGSARI KECAMATAN PUJON KABUPATEN MALANG JAWA TIMUR" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>POH</Label>
					</Grid>
					<Grid>
						<RevisiInput value="SURABAYA" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Email</Label>
					</Grid>
					<Grid>
						<RevisiInput value="agusekaprst@gmail.com" />
					</Grid>
				</Grid>
				<Grid container flexDirection="row" alignItems="center" gap={40}>
					<Grid style={{ maxWidth: "100px" }}>
						<Label>Bring Family</Label>
					</Grid>
					<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
						<Toggler />
						<Grid>
							<RevisiDate dateState={date} setDateState={setDate} placeholder="" />
						</Grid>
					</Grid>
				</Grid>
				<Grid container flexDirection="row" gap={40} style={{ margin: "20px 0 0" }}>
					<Grid container flexDirection="column" gap={10} style={{ flex: 1 }}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>Start Date</Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<Grid>
								<RevisiDate dateState={date} setDateState={setDate} placeholder="" />
							</Grid>
						</Grid>
					</Grid>
					<Grid container flexDirection="column" gap={10} style={{ flex: 1 }}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>To Date</Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<Grid>
								<RevisiDate dateState={date} setDateState={setDate} placeholder="" />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container gap={40} justifyContent="center">
					<Grid container flexDirection="column" gap={10}>
						<Grid>
							<Label>Lapangan</Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<CheckboxContainer>
								<Grid
									container
									alignItems="center"
									style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
								>
									<Checkbox />
								</Grid>
								<Input
									type="number"
									min="0"
									style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
								/>
							</CheckboxContainer>
						</Grid>
					</Grid>
					<Grid container flexDirection="column" gap={10}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>Tahunan</Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<CheckboxContainer>
								<Grid
									container
									alignItems="center"
									style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
								>
									<Checkbox />
								</Grid>
								<Input
									type="number"
									min="0"
									style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
								/>
							</CheckboxContainer>
						</Grid>
					</Grid>
					<Grid container flexDirection="column" gap={10}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>Seminar </Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<CheckboxContainer>
								<Grid
									container
									alignItems="center"
									style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
								>
									<Checkbox />
								</Grid>
								<Input
									type="number"
									min="0"
									style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
								/>
							</CheckboxContainer>
						</Grid>
					</Grid>
					<Grid container flexDirection="column" gap={10}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>Besar </Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<CheckboxContainer>
								<Grid
									container
									alignItems="center"
									style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
								>
									<Checkbox />
								</Grid>
								<Input
									type="number"
									min="0"
									style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
								/>
							</CheckboxContainer>
						</Grid>
					</Grid>
					<Grid container flexDirection="column" gap={10}>
						<Grid style={{ maxWidth: "100px" }}>
							<Label>Istirahat </Label>
						</Grid>
						<Grid container gap={20} alignItems="center" style={{ flex: 1 }}>
							<CheckboxContainer>
								<Grid
									container
									alignItems="center"
									style={{ padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.3)" }}
								>
									<Checkbox />
								</Grid>
								<Input
									type="number"
									min="0"
									style={{ border: "none", outline: "none", padding: "0 10px", maxWidth: "70px" }}
								/>
							</CheckboxContainer>
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "100px" }}>Next</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
