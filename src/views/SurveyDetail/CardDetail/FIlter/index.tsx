import { Grid } from "@hudoro/neron";
import { IcFilterList } from "atoms/Icon";
import React from "react";
import { FilterContainer, FilterIcon, FilterText } from "../styles";

interface IProps {
	isSort: boolean;
	setIsSort: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterAscDesc = ({ isSort, setIsSort }: IProps) => {
	return (
		<Grid container gap={24} alignItems="center" justifyContent="flex-end">
			<FilterText style={{ fontWeight: "400" }}>Urutan Item</FilterText>
			<FilterContainer onClick={() => setIsSort(!isSort)}>
				<FilterIcon isRotateIcon={isSort}>
					<IcFilterList width={24} />
				</FilterIcon>
				<FilterText>{isSort ? "Terendah" : "Tertinggi"}</FilterText>
			</FilterContainer>
		</Grid>
	);
};

export default FilterAscDesc;
