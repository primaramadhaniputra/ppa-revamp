import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useRef } from "react";
import { StyledLabel } from "atoms/LabeledInput/styles";
import { ISurveyReportCriteria } from "utils/interfaces";
import TableExcel from "./TableExcel";
import { ButtonDowload, SelectContainer } from "./styles";
import Cookies from "js-cookie";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import { useDownloadExcel } from "react-export-table-to-excel";

interface IProps {
	setPeriodeId: React.Dispatch<any>;
	periodeId: string;
	reportCriteria: ISurveyReportCriteria[];
}

const FilterPeriod = ({ setPeriodeId, reportCriteria }: IProps) => {
	const tableRef = useRef(null);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

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
				<ButtonDowload onClick={onDownload}>Download excel</ButtonDowload>
			</Grid>
		</Grid>
	);
};

export default FilterPeriod;
