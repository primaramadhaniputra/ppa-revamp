import { Grid } from "@hudoro/neron";
import { Table } from "@tanstack/react-table";
import React from "react";
import { ContainerGlobalSearch, ContainerShow } from "./styles";

interface IProps {
	globalFilter: string;
	setGlobalFilter: (value: React.SetStateAction<string>) => void;
	table: Table<any>;
}

export default function GlobaFilter({ globalFilter, setGlobalFilter, table }: IProps) {
	return (
		<Grid container alignItems="center" justifyContent="space-between" gap={10}>
			<ContainerShow gap={10}>
				<label>Show</label>
				<input
					type={"number"}
					min={1}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
				/>
			</ContainerShow>
			<ContainerGlobalSearch>
				<label>Search</label>
				<DebouncedInput
					value={globalFilter ?? ""}
					onChange={(value) => setGlobalFilter(String(value))}
					className="p-2 font-lg shadow border border-block"
					placeholder="Search all columns..."
				/>
			</ContainerGlobalSearch>
		</Grid>
	);
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
