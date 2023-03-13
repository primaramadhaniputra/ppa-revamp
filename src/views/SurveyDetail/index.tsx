import { Grid, Icon } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ISurveyReportCriteriaDetail, ISurveyReportCriticism } from "utils/interfaces";
import CardDetail from "./CardDetail";
import StatusCard from "./StatusCard";
import { PeriodeText } from "./styles";

interface IProps {
	dataReport: ISurveyReportCriteriaDetail[];
	criticism: ISurveyReportCriticism[];
}

const SurveyDetail = ({ dataReport, criticism }: IProps) => {
	const site = Cookies.get("site");
	const periode = Cookies.get("periode");
	const parentCompany = Cookies.get("parentCompany");
	const router = useRouter();

	const handleBack = () => {
		return router.back();
	};

	return (
		<>
			<Grid container gap={10} alignItems="center" justifyContent="space-between">
				<Grid container gap={10}>
					<TitlePage type="h3" styles={{ fontSize: "22px" }}>
						Detail Laporan Survey /{" "}
						<span style={{ fontSize: "16px", color: "rgba(170, 180, 198, 1)" }}>
							{site} ({parentCompany})
						</span>
					</TitlePage>
				</Grid>
				<PeriodeText>
					periode : <span style={{ fontWeight: "600" }}>{periode}</span>
				</PeriodeText>
			</Grid>
			<Icon
				iconName="IcArrowLeft"
				size={24}
				style={{ marginTop: "15px", cursor: "pointer" }}
				onClick={handleBack}
			/>
			<StatusCard />
			<CardDetail dataReport={dataReport} criticism={criticism} />
		</>
	);
};

export default SurveyDetail;
