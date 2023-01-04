import React, { useMemo } from "react";
import { ButtonContainer, TableTitle, WrapperInput } from "./styles";
import { createColumnHelper } from "@tanstack/react-table";
import { Grid } from "@hudoro/neron";
import { IcEdit } from "atoms/Icon";
import StyledButton from "atoms/StyledButton";
import { colors } from "utils/styles";
import RevisiInputYoutube from "atoms/RevisiInputYoutube";
import MigrateTable from "src/components/organism/MigrateTable";

interface IProps {
	[x: string]: any;
}

const arr = new Array(10).fill(0);
export const defaultDataTable = arr.map((_, index) => {
	return {
		NRP: "HD787",
		Name: "Hd123",
		["Dept"]: `33${index}`,
		["Kode Unit"]: `33${index}`,
		Shift: "2022-17-08",
		Date: "123",
		Status: "123",
		["Atasan Status"]: "123",
		["Detail"]: "123",
	};
});

const columnHelper = createColumnHelper<IProps>();

export default function Table() {
	const objTitle = useMemo(() => Object.keys(defaultDataTable.map((item: any) => item)[0]), []);

	const columns = objTitle.map((item) =>
		columnHelper.accessor(item, {
			header: () => item,
			cell: (info) => {
				return (
					<>
						{info.column.id === "Detail" ? (
							<Grid container justifyContent="center">
								<IcEdit width={18} cursor="pointer" strokeWidth={2} color={colors.primary} />
							</Grid>
						) : (
							info.renderValue()
						)}
					</>
				);
			},
			footer: (info) => info.column.id,
		}),
	);

	return (
		<>
			<TableTitle variant="h4">Form Create Subject Quiz</TableTitle>
			<WrapperInput>
				<Grid style={{ flex: 1 }}>
					<RevisiInputYoutube />
				</Grid>
				<ButtonContainer>
					<StyledButton
						style={{
							padding: "4px 0",
							minWidth: "150px",
							fontSize: "15px",
							fontWeight: "bold",
							backgroundColor: colors.orange,
							color: "white",
							borderRadius: "2px",
						}}
					>
						Add
					</StyledButton>
				</ButtonContainer>
			</WrapperInput>
			<MigrateTable data={defaultDataTable} columns={columns} />
		</>
	);
}
