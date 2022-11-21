import { Grid } from "@hudoro/neron";
import RevisiInput from "atoms/RevisiInput";
import StyledButton from "atoms/StyledButton";
import StyledSelectInput from "atoms/StyledSelectInput";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Label } from "../FormMultipleChoice/styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function DataDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Form Question Post Test"
			>
				<Grid container flexDirection="column" gap={30}>
					<StyledSelectInput title="Subject Name" />
					<StyledSelectInput title="Group Subject" />
					<Grid container alignItems="center" gap={30}>
						<Label>Gambar</Label>
						<Grid>
							<RevisiInput type="file" />
						</Grid>
					</Grid>
					<Grid container alignItems="center" gap={30}>
						<Label>Question</Label>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="flex-end" style={{ margin: "40px 0 20px" }}>
					<StyledButton style={{ maxWidth: "250px" }}>Submit</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
