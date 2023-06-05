import React from "react";
import { DescriptionContainer, Wrapper } from "./styles";
import { IcEllipse } from "atoms/Icon";
import { Grid, Text } from "@hudoro/neron";

const TableManajemenRisiko = () => {
	return (
		<Wrapper>
			<DescriptionContainer>
				<Grid container gap={24}>
					<IcEllipse width={15} color="#29CC6A" />
					<Text variant="p">Jenis risiko yang kemungkinan tinggi untuk terjadi. </Text>
				</Grid>
				<Grid container gap={24}>
					<IcEllipse width={15} color="#FC5555" />
					<Text variant="p">Jenis risiko yang berdampak (“negatif” atau “positif” ) besar. </Text>
				</Grid>
			</DescriptionContainer>
		</Wrapper>
	);
};

export default TableManajemenRisiko;
