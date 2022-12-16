import { fontFamilies, Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import UltimateInput from "src/components/organism/UltimateInput";
import { colors, fontSizing } from "utils/styles";
import FormAddActivity from "./FormAddActivity";
import { StyledInput, StyledSelect } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function UpdateHm({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	const [isShowAddActivity, setIsShowAddActivity] = React.useState(false);
	const [formAddActivityPosition, setformAddActivityPosition] = React.useState(0);

	const handleShowAddActivity = (target: { pageY: number; clientY: number }) => {
		setIsShowAddActivity(true);
		setformAddActivityPosition(target.pageY - target.clientY);
	};

	return (
		<>
			<LayoutOverlayData
				isShowDetail={isShowDetail}
				setIsShowDetail={setIsShowDetail}
				formPosition={formPosition}
				title="Add HM"
				button={true}
				width={1400}
			>
				<Grid
					container
					flexDirection="column"
					gap={20}
					style={{ maxWidth: "800px", margin: "0 auto 50px" }}
				>
					<UltimateInput isInput={true} title="Code Number" maxLableWidth="120px" />
					<UltimateInput isDate={true} title="Date" maxLableWidth="120px" />
					<UltimateInput isInput={true} title="NRP" maxLableWidth="120px" />
					<UltimateInput isInput={true} title="Name" maxLableWidth="120px" />
					<UltimateInput isInput={true} title="HM Start" maxLableWidth="120px" />
					<UltimateInput isInput={true} title="HM Stop" maxLableWidth="120px" />
				</Grid>
				<hr style={{ boxShadow: "0 1px 3px rgba(0,0,0,.25)" }} />
				<Grid style={{ maxWidth: "max-content", margin: "20px  0 0 auto" }}>
					<StyledButton
						style={{
							backgroundColor: colors.orange,
							fontSize: fontSizing.sm.fontSize,
							padding: "3px 10px",
						}}
						onClick={handleShowAddActivity}
					>
						+ Activity
					</StyledButton>
				</Grid>
				<Grid>
					<table width="100%" style={{ fontFamily: fontFamilies.poppins, fontSize: "13px" }}>
						<thead style={{ color: "black", borderBottom: "1px solid rgba(0,0,0,.1)" }}>
							<tr>
								<th style={{ padding: "10px 0", fontWeight: 500 }}>Operation</th>
								<th style={{ padding: "10px 0", fontWeight: 500 }}>Activity</th>
								<th style={{ padding: "10px 0", fontWeight: 500 }}>Sub Activity</th>
								<th style={{ padding: "10px 0", fontWeight: 500 }}>HM start</th>
								<th style={{ padding: "10px 0", fontWeight: 500 }}>HM Stop</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ textAlign: "center" }}>07:13 &nbsp; - &nbsp; 17:20</td>
								<td style={{ padding: "10px" }}>
									<StyledSelect name="u_act[]">
										<option value="Coal Getting">Testing</option>
									</StyledSelect>
								</td>
								<td style={{ padding: "10px" }}>
									<StyledSelect name="u_act[]">
										<option value="Coal Getting">Testing</option>
									</StyledSelect>
								</td>
								<td style={{ padding: "10px" }}>
									<StyledInput type="number" step="any" value="107917.00" />
								</td>
								<td style={{ padding: "10px" }}>
									<StyledInput type="number" step="any" value="107987.00" />
								</td>
							</tr>
						</tbody>
					</table>
				</Grid>
			</LayoutOverlayData>
			<FormAddActivity
				isShowDetail={isShowAddActivity}
				setIsShowDetail={setIsShowAddActivity}
				formPosition={formAddActivityPosition}
			/>
		</>
	);
}
