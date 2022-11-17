import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Input, InputContainer, Label } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FlyingForm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="Upload SPL"
		>
			<InputContainer>
				<Grid container flexDirection="column" gap={10}>
					<Label>Select Excel File</Label>
					<Input type="file" />
				</Grid>
				<Grid container justifyContent="flex-end">
					<StyledButton style={{ maxWidth: "100px" }}>Upload</StyledButton>
				</Grid>
			</InputContainer>
		</LayoutOverlayData>
	);
}