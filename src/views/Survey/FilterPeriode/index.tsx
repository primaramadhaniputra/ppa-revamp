import { Grid, ISelectItem, Select } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React, { useRef } from "react";
import { StyledLabel } from "atoms/LabeledInput/styles";
import { ISurveyReportCriteria } from "utils/interfaces";
import { DownloadTableExcel } from "react-export-table-to-excel";
import TableExcel from "./TableExcel";

interface IProps {
	periode: ISelectItem[];
	setPeriodeId: React.Dispatch<any>;
	periodeId: string;
	reportCriteria: ISurveyReportCriteria[];
}

const FilterPeriod = ({ periode, setPeriodeId, reportCriteria }: IProps) => {
	const tableRef = useRef(null);
	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
	};

	return (
		<Grid container gap={20} justifyContent="flex-end">
			<TableExcel tableRef={tableRef} reportCriteria={reportCriteria} />
			<Grid container gap={20} justifyContent="flex-end" style={{ marginTop: "30px" }}>
				<Grid container gap={5} flexDirection="column">
					<StyledLabel>Periode</StyledLabel>
					<Select items={periode} onChange={handleChangePeriode} defaultValue={periode[0]} />
				</Grid>
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
