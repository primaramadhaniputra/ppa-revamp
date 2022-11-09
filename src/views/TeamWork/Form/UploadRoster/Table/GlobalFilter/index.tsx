import { Grid } from "@hudoro/neron";
import StyledInputLabel from "atoms/StyledInputLabel";
import React, { ChangeEvent } from "react";
import { dataText } from "utils/dummy";
import { Wrapper } from "./styles";

interface IProps {
	setDataTable: React.Dispatch<
		React.SetStateAction<
			{
				date: string;
				fileName: string;
				mp: string;
				day: string;
				status: string;
				remark: string;
			}[]
		>
	>;
}

const GlobalFilter = ({ setDataTable }: IProps) => {
	const handleChangeGlobal = (e: ChangeEvent<HTMLInputElement>) => {
		const title = Object.keys(dataText[0]);
		const newData = dataText.filter((item: any) => {
			for (let x of title) {
				if (item[x].includes(e.target.value)) {
					return item;
				}
			}
		});
		setDataTable(newData);
	};

	const handleChangeShow = (e: ChangeEvent<HTMLInputElement>) => {
		if (parseInt(e.target.value) > -1) {
			const newData = dataText.slice(0, parseInt(e.target.value));
			setDataTable(newData);
		}
	};

	return (
		<Wrapper>
			<Grid container gap={5} alignItems="center">
				<StyledInputLabel
					title="Show"
					style={{ width: "50px" }}
					type="number"
					onChange={handleChangeShow}
					defaultValue={10}
				/>
			</Grid>
			<Grid container gap={5} alignItems="center">
				<StyledInputLabel title="Search" placeholder="Search..." onChange={handleChangeGlobal} />
			</Grid>
		</Wrapper>
	);
};

export default GlobalFilter;
