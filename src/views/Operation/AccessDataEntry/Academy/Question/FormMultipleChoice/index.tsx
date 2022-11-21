import { colors, Grid } from "@hudoro/neron";
import { IcPlusCircle } from "atoms/Icon";
import RevisiInput from "atoms/RevisiInput";
import StyledButton from "atoms/StyledButton";
import StyledSelectInput from "atoms/StyledSelectInput";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { Label, U } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function FormMultipleChoice({
	isShowDetail,
	setIsShowDetail,
	formPosition,
}: IProps) {
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
					<Grid container gap={10} style={{ marginTop: "10px" }}>
						<Grid container>
							<StyledButton
								style={{ padding: "3px 20px", display: "flex", alignItems: "center", gap: "10px" }}
							>
								{" "}
								<IcPlusCircle width={16} /> Row Form
							</StyledButton>
						</Grid>
						<Grid container>
							<StyledButton style={{ padding: "3px 20px", backgroundColor: colors.black["40"] }}>
								Reset
							</StyledButton>
						</Grid>
					</Grid>
					<U>Exam Questions</U>
					<Grid container alignItems="flex-end" gap={30} style={{ margin: "10px 0" }}>
						<Label>Question</Label>
						<Grid>
							<RevisiInput />
						</Grid>
					</Grid>
					<Grid container gap={20}>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiInput placeholder="Option A" />
						</Grid>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiInput placeholder="Option B" />
						</Grid>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiInput placeholder="Option C" />
						</Grid>
						<Grid style={{ minWidth: "200px" }}>
							<RevisiInput placeholder="Option D" />
						</Grid>
					</Grid>
					<StyledSelectInput title="Answer" />
				</Grid>
				<Grid container justifyContent="flex-end" style={{ margin: "40px 0 20px" }}>
					<StyledButton style={{ maxWidth: "250px" }}>Submit</StyledButton>
				</Grid>
			</LayoutOverlayData>
		</>
	);
}
