import React from "react";
import { Wrapper } from "../styles";
import TopFilter from "src/components/organism/TopFilter";
import { Grid, Select, Text } from "@hudoro/neron";
import { TABLE, WrapperTable } from "./styles";
import { fontWeights } from "utils/styles";

const items = [
	{
		id: "0",
		label: "Shift 1",
		values: "Shift 1",
	},
	{
		id: "1",
		label: "Shift 2",
		values: "Shift 2",
	},
];

export default function CycleSummary() {
	return (
		<>
			<TopFilter />
			<Grid style={{ maxWidth: "250px", margin: " auto" }}>
				<Select items={items} defaultValue={items[0]} />
			</Grid>
			<Wrapper>
				<Text variant="h4" style={{ marginBottom: "20px", fontWeight: fontWeights.bold }}>
					Search Result - Cycle Summary
				</Text>
				<WrapperTable>
					<TABLE>
						<thead>
							<tr>
								<th rowSpan={2}>TOTAL PRODUCTION</th>
								<th>06</th>
								<th>07</th>
								<th>08</th>
								<th>09</th>
								<th>10</th>
								<th>11</th>
								<th>12</th>
								<th>13</th>
								<th>14</th>
								<th>15</th>
								<th>16</th>
								<th>17</th>
								<th>GRAND TOTAL</th>
							</tr>
							<tr>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
							</tr>
						</thead>
						<tbody></tbody>
					</TABLE>
				</WrapperTable>
			</Wrapper>
			<Wrapper style={{ marginTop: "40px" }}>
				<Text variant="h4" style={{ marginBottom: "20px", fontWeight: fontWeights.bold }}>
					Detail Cycle{" "}
				</Text>
				<WrapperTable>
					<TABLE>
						<thead>
							<tr>
								<th>Hauler</th>
								<th>06</th>
								<th>07</th>
								<th>08</th>
								<th>09</th>
								<th>10</th>
								<th>11</th>
								<th>12</th>
								<th>13</th>
								<th>14</th>
								<th>15</th>
								<th>16</th>
								<th>17</th>
								<th>GRAND TOTAL</th>
							</tr>
							<tr>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
								<td>
									<strong>0</strong>
								</td>
							</tr>
						</thead>
						<tbody></tbody>
					</TABLE>
				</WrapperTable>
			</Wrapper>
		</>
	);
}
