import { Grid, ISelectItem, Select } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React, { useRef } from "react";
import { StyledLabel } from "atoms/LabeledInput/styles";
import { ISurveyReportCriteria } from "utils/interfaces";
import { DownloadTableExcel } from "react-export-table-to-excel";
import TableExcel from "./TableExcel";
import { SelectContainer } from "./styles";
import Cookies from "js-cookie";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";

interface IProps {
	setPeriodeId: React.Dispatch<any>;
	periodeId: string;
	reportCriteria: ISurveyReportCriteria[];
}

const FilterPeriod = ({ setPeriodeId, reportCriteria }: IProps) => {
	const tableRef = useRef(null);

	const periode = useSurveyPeriodeValue();

	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
		const dataPeriode = periode.find((item) => item.values === e?.values);
		Cookies.set("periode", dataPeriode?.label!);
	};

	return (
		<Grid container gap={20} justifyContent="flex-end">
			<TableExcel tableRef={tableRef} reportCriteria={reportCriteria} />
			<Grid container gap={20} justifyContent="flex-end" style={{ marginTop: "30px" }}>
				<SelectContainer>
					<StyledLabel>Periode</StyledLabel>
					<Select items={periode} onChange={handleChangePeriode} defaultValue={periode[0]} />
				</SelectContainer>
			</Grid>
			<Grid container alignItems="flex-end" style={{ minWidth: "140px", marginBottom: "2px" }}>
				<DownloadTableExcel filename="users table" sheet="users" currentTableRef={tableRef.current}>
					<StyledButton>download excel</StyledButton>
				</DownloadTableExcel>
			</Grid>
		</Grid>
	);
};

export default FilterPeriod;
