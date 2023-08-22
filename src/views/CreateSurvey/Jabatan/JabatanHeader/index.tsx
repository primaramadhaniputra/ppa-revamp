import { Button, Grid, Text } from "@hudoro/neron";
import React from "react";
import { JabatanHeader as Header } from "./styles";

interface IProps {
	setDataChecked: React.Dispatch<
		React.SetStateAction<
			{
				label: string;
				id: string;
			}[]
		>
	>;
	setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const JabatanHeader = ({ setDataChecked, setIsCheckAll }: IProps) => {
	const handleReset = () => {
		setDataChecked([]);
		setIsCheckAll(false);
	};
	return (
		<Header>
			<Text variant="p" style={{ flex: "2", fontWeight: "600" }}>
				Filter Jabatan
			</Text>
			<Grid container>
				<Button onClick={handleReset} variant="ghost" style={{ color: "red" }}>
					Reset
				</Button>
				<Button variant="primary" style={{ background: "#141bbd", borderRadius: "4px" }}>
					{" "}
					Simpan
				</Button>
			</Grid>
		</Header>
	);
};

export default JabatanHeader;
