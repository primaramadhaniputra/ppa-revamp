import React, { useEffect, useState } from "react";
import TableExcel from "./TableExcel";
import CardSite from "./CardSite";
import PointDescription from "./PointDescription";
import { getReportCriteriaByCriteriaId } from "services/survey";
import Loading from "atoms/Loading";

interface IProps {
	periodeId: any;
}

const KepuasanPelanggan = ({ periodeId }: IProps) => {
	const [dataReport, setDataReport] = useState([]);
	const [loading, setloading] = useState(false);

	const handleGetReportCriteriaById = async () => {
		try {
			setloading(true);
			const response = await getReportCriteriaByCriteriaId({
				path: `${periodeId}`,
			});
			setDataReport(response.data.data.reports);
		} catch (error) {
		} finally {
			setloading(false);
		}
	};

	useEffect(() => {
		handleGetReportCriteriaById();
	}, [periodeId]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<TableExcel reportCriteria={dataReport} />
					<PointDescription />
					<CardSite reportCriteria={dataReport} periodeId={periodeId} />
				</>
			)}
		</>
	);
};

export default KepuasanPelanggan;
