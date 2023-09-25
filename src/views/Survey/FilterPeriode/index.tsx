import { ISelectItem, Select } from "@hudoro/neron";
import React, { useEffect } from "react";
// import { StyledLabel } from "atoms/LabeledInput/styles";
import Cookies from "js-cookie";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import { SelectContainer } from "./styles";
import { useRouter } from "next/router";

interface IProps {
	setPeriodeId: React.Dispatch<any>;
	periodeId?: string;
}

const FilterPeriod = ({ periodeId, setPeriodeId }: IProps) => {
	const periode = useSurveyPeriodeValue();
	const Router = useRouter()
	const periodeName = Cookies.get("periode");

	console.log(periodeId)

	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
		const dataPeriode = periode.find((item) => item.values === e?.values);
		Cookies.set("periode", dataPeriode?.label!);
		Cookies.set("periodeId", dataPeriode!.id.toString());
		Router.push({
			pathname: '/dashboard/survey',
			query: { periodeId: e?.values }
		},
			undefined, { shallow: true }
		)
	};

	useEffect(() => {
		if (periodeName) {
			console
			const findPeriode = periode.find(item => item.label === periodeName)
			handleChangePeriode(findPeriode as ISelectItem)
		}
	}, [])

	return (
		<SelectContainer>
			<Select
				items={periode}
				defaultValue={periode.find((item) => item.id === periodeId)}
				onChange={handleChangePeriode}
				placeholder="Survey Type..."
			/>
		</SelectContainer>
	);
};

export default FilterPeriod;
