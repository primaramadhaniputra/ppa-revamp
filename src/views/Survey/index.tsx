import Loading from "atoms/Loading";
import TitlePage from "atoms/TitlePage";
import { useRef, useState } from "react";
import { useSurveyPeriodeValue } from "recoil/surveyPeriode/atom";
import { getReportCriteriaByCriteriaId } from "services/survey";
import { useAsync } from "utils/customHooks";
import { IPromiseResult } from "utils/interfaces";
import CardSite from "./CardSite";
import FilterPeriod from "./FilterPeriode";
import PointDescription from "./PointDescription";
import { useDownloadExcel } from "react-export-table-to-excel";
import TableExcel from "./TableExcel";

const Survey = () => {
	const periode = useSurveyPeriodeValue();
	const [periodeId, setPeriodeId] = useState(periode[0].values);
	// for excel
	const tableRef = useRef(null);

	const { onDownload } = useDownloadExcel({
		currentTableRef: tableRef.current,
		filename: "Users table",
		sheet: "Users",
	});

	const { loading, response } = useAsync(
		() =>
			getReportCriteriaByCriteriaId({
				path: `${periodeId}`,
			}),
		periodeId,
		true,
	);

	const dataReport = (response as IPromiseResult)?.data.data.reports;
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Survey Kepuasan Pelanggan
			</TitlePage>
			<FilterPeriod setPeriodeId={setPeriodeId} periodeId={periodeId} onDownload={onDownload} />
			{loading || !response ? (
				<Loading />
			) : (
				<>
					<CardSite reportCriteria={dataReport} periodeId={periodeId} />
					<PointDescription />
					<TableExcel tableRef={tableRef} reportCriteria={dataReport} />
				</>
			)}
		</>
	);
};

export default Survey;
