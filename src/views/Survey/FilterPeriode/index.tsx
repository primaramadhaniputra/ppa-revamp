import { ISelectItem, Select } from "@hudoro/neron";
import React from "react";
// import { StyledLabel } from "atoms/LabeledInput/styles";
import Cookies from "js-cookie";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import { SelectContainer } from "./styles";

interface IProps {
	setPeriodeId: React.Dispatch<any>;
}

const FilterPeriod = ({ setPeriodeId }: IProps) => {
	const periode = useSurveyPeriodeValue();
	// const periodeName = Cookies.get("periode");

	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
		const dataPeriode = periode.find((item) => item.values === e?.values);
		Cookies.set("periode", dataPeriode?.label!);
		Cookies.set("periodeId", dataPeriode!.id.toString());
	};

	return (
		<SelectContainer>
			<Select items={periode} onChange={handleChangePeriode} placeholder="Survey Type..." />
		</SelectContainer>
	);
};

export default FilterPeriod;
