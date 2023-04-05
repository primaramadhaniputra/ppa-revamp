import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React from "react";
import { StyledLabel } from "atoms/LabeledInput/styles";
import { ButtonDowload, SelectContainer } from "./styles";
import Cookies from "js-cookie";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";

interface IProps {
	setPeriodeId: React.Dispatch<any>;
	periodeId: string;
	onDownload: () => boolean;
}

const FilterPeriod = ({ setPeriodeId, onDownload }: IProps) => {
	const periode = useSurveyPeriodeValue();

	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
		const dataPeriode = periode.find((item) => item.values === e?.values);
		Cookies.set("periode", dataPeriode?.label!);
	};

	return (
		<Grid container gap={20} justifyContent="flex-end">
			<Grid container gap={20} justifyContent="flex-end" style={{ marginTop: "30px" }}>
				<SelectContainer>
					<StyledLabel>Survey</StyledLabel>
					<Select items={periode} onChange={handleChangePeriode} defaultValue={periode[0]} />
				</SelectContainer>
			</Grid>
			<Grid container alignItems="flex-end" style={{ minWidth: "140px", marginBottom: "2px" }}>
				<ButtonDowload onClick={onDownload}>Download excel</ButtonDowload>
			</Grid>
		</Grid>
	);
};

export default FilterPeriod;
