import { Grid } from "@hudoro/neron";
import { Table } from "@tanstack/react-table";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { colors } from "utils/styles";
import {
	ContainerButton,
	ContainerGlobalSearch,
	ContainerInput,
	ContainerShow,
	Wrapper,
} from "./styles";

interface IProps {
	globalFilter: string;
	setGlobalFilter: (value: React.SetStateAction<string>) => void;
	table: Table<any>;
}

function DebouncedInput({
	value: initialValue,
	onChange,
	debounce = 500,
	...props
}: {
	value: string | number;
	onChange: (value: string | number) => void;
	debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
	const [value, setValue] = React.useState(initialValue);

	React.useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
}

export default function GlobaFilter({ globalFilter, setGlobalFilter, table }: IProps) {
	return (
		<Wrapper>
			<ContainerShow gap={10}>
				<label>Show</label>
				<Grid>
					<input
						type={"number"}
						min={1}
						onChange={(e) => {
							table.setPageSize(Number(e.target.value));
						}}
					/>
				</Grid>
			</ContainerShow>
			<ContainerGlobalSearch>
				<ContainerButton>
					<StyledButton style={{ background: colors.primary }}>Export</StyledButton>
				</ContainerButton>
				<ContainerInput>
					<label>Search :</label>
					<Grid>
						<DebouncedInput
							value={globalFilter ?? ""}
							onChange={(value) => setGlobalFilter(String(value))}
							className="p-2 font-lg shadow border border-block"
							placeholder="Search all columns..."
						/>
					</Grid>
				</ContainerInput>
			</ContainerGlobalSearch>
		</Wrapper>
	);
}
