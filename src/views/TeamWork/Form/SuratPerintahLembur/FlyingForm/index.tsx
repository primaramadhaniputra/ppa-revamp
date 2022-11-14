import { Grid } from "@hudoro/neron";
import InputTime from "atoms/InputTime";
import { StyledInput } from "atoms/InputTime/styles";
import RevisiInputYoutube from "atoms/RevisiInputYoutube";
import StyledButton from "atoms/StyledButton";
import StyledSelectInput from "atoms/StyledSelectInput";
import RevisiDate from "molecules/RevisiDate";
import React, { useState } from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { InputContainer, Label } from "./styles";

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
			title="Attendance Revision Form
			"
			width={800}
		>
			<InputContainer>
				<StyledSelectInput title="Name" />
				<Grid container alignItems="center" gap={50}>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<Label>Date</Label>
						<RevisiDate dateState={date} setDateState={setDate} placeholder="" />
					</Grid>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<Label>Roster</Label>
						<StyledInput />
					</Grid>
				</Grid>
				<Grid container alignItems="center" gap={50}>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<Label>Start</Label>
						<InputTime name="in" label="" type="time" />
					</Grid>
					<Grid container flexDirection="column" gap={20} style={{ flex: 1 }}>
						<Label>End</Label>
						<InputTime name="in" label="" type="time" />
					</Grid>
				</Grid>
				<Grid container alignItems="center">
					<Label>Remark</Label>
					<RevisiInputYoutube />
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "100px" }}>Submit</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}
