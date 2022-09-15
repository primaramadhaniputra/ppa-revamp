import { Grid, Icon } from "@hudoro/neron";
import React from "react";
import { Container, DataContainer, StyledP, Table, Title, Wrapper } from "./styles";

interface IProps {
	onclick: () => void;
}

export default function ShowDetail({ onclick }: IProps) {
	return (
		<Wrapper onClick={onclick}>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					style={{ marginBottom: 30 }}
				>
					<Title>KT08/HCG/2102/CUTI/00072</Title>
					<Icon iconName="IcClose" style={{ cursor: "pointer" }} onClick={onclick} />
				</Grid>
				<Grid container gap={20}>
					<DataContainer>
						<StyledP>Name :</StyledP>
						<p>AGUS EKA PRASETYA</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Position :</StyledP>
						<p>GROUP LEADER SYSTEM DEVELOPER</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Date :</StyledP>
						<p>2020-12-16 to 2020-12-30</p>
					</DataContainer>
					<DataContainer>
						<StyledP>POH :</StyledP>
						<p>2020-12-16 to 2020-12-30</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Hiring Date :</StyledP>
						<p>2020-12-16 to 2020-12-30</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Status :</StyledP>
						<p>2020-12-16 to 2020-12-30</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Leave :</StyledP>
						<p>2020-12-16 to 2020-12-30</p>
					</DataContainer>
					<DataContainer>
						<StyledP>Address :</StyledP>
						<p>DUSUN MANTING RT. 018 RW. 003 KEL. TAWANGSARI KEC. PUJON KAB. MALANG JAWA TIMUR</p>
					</DataContainer>
					<DataContainer style={{ flexDirection: "column" }}>
						<StyledP>Approval History :</StyledP>
						<p style={{ paddingLeft: "20px" }}>
							{" "}
							[SH] Approved by DWI HENDRA IRAWAN with no message on 2020-12-13 17:40:19
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
			</Container>
		</Wrapper>
	);
}
