import { Grid } from "@hudoro/neron";
import React from "react";
import LayoutOverlayData from "src/components/layouts/LayoutOverlayData";
import { DataContainer, StyledP, Table } from "./styles";

interface IProps {
	isShowDetail: boolean;
	setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
	formPosition: number;
}

export default function ShowDetail({ isShowDetail, setIsShowDetail, formPosition }: IProps) {
	return (
		<LayoutOverlayData
			isShowDetail={isShowDetail}
			setIsShowDetail={setIsShowDetail}
			formPosition={formPosition}
			title="KT08/HCG/2102/CUTI/00072"
		>
			<Grid flexDirection="column" container gap={20} style={{ padding: "20px 10px" }}>
				<DataContainer>
					<StyledP>Name :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Position :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Date :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>POH :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Hiring Date :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Status :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Leave :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer>
					<StyledP>Address :</StyledP>
					<p>-</p>
				</DataContainer>
				<DataContainer style={{ flexDirection: "column" }}>
					<StyledP>Approval History :</StyledP>
					<p style={{ paddingLeft: "20px" }}>
						{" "}
						{/* [SH] Approved by DWI HENDRA IRAWAN with no message on 2020-12-13 17:40:19 */}-
					</p>
				</DataContainer>
				<DataContainer style={{ flexDirection: "column", width: "100%" }}>
					<StyledP>Requested Ticket :</StyledP>
					<Table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Age</th>
								<th>Ticket for</th>
								<th>Date</th>
								<th>From</th>
								<th>To</th>
								<th>action</th>
							</tr>
						</thead>
						{/* <tbody>
                        <tr>
                           <td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td><td>cell5_1</td><td>cell6_1</td><td>cell7_1</td>
                        </tr>
                     </tbody> */}
					</Table>
				</DataContainer>
			</Grid>
		</LayoutOverlayData>
	);
}
