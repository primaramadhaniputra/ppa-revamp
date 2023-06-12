import React, { useEffect, useState } from "react";
import TableExcel from "./TableExcel";
import CardSite from "./CardSite";
import PointDescription from "./PointDescription";
import { getReportCriteriaByCriteriaId } from "services/survey";

interface IProps {
	periodeId: any;
}

const KepuasanPelanggan = ({ periodeId }: IProps) => {
	const [dataReport, setDataReport] = useState([]);

	const handleGetReportCriteriaById = async () => {
		try {
			const response = await getReportCriteriaByCriteriaId({
				path: `${periodeId}`,
			});
			setDataReport(response.data.data.reports);
			console.log("responseeee", response.data.data);
		} catch (error) {}
	};

	useEffect(() => {
		handleGetReportCriteriaById();
		console.log("oke");
	}, [periodeId]);
	console.log(periodeId);
	return (
		<>
			<TableExcel reportCriteria={dataReport} />
			<CardSite reportCriteria={dataReport} periodeId={periodeId} />
			<PointDescription />
		</>
	);
};

export default KepuasanPelanggan;
