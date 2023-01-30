import { Grid, ISelectItem, Select } from "@hudoro/neron";
// import StyledButton from "atoms/StyledButton";
import React from "react";
// import FileSaver from "file-saver";
// import XLSX from "sheetjs-style";
import { StyledLabel } from "atoms/LabeledInput/styles";
import { ISurveyReportCriteria } from "utils/interfaces";

interface IProps {
	periode: ISelectItem[];
	setPeriodeId: React.Dispatch<any>;
	periodeId: string;
	reportCriteria: ISurveyReportCriteria[];
}

const FilterPeriod = ({ periode, setPeriodeId }: IProps) => {
	// const exportToExcel = async () => {
	// 	const fileName = "banana Export";

	// 	const excelData = [
	// 		{
	// 			firstName: "dani",
	// 			lastName: "ganteng",
	// 			desc: "dani ganteng banget",
	// 		},
	// 	];

	// 	const fileType =
	// 		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	// 	const fileExtension = ".xlsx";

	// 	const ws = XLSX.utils.json_to_sheet(excelData);
	// 	const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
	// 	const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
	// 	const data = new Blob([excelBuffer], { type: fileType });
	// 	FileSaver.saveAs(data, fileName + fileExtension);
	// };

	const handleChangePeriode = (e: ISelectItem | ISelectItem[] | null) => {
		setPeriodeId(e?.values);
	};

	return (
		<Grid container gap={20} justifyContent="flex-end">
			<Grid container gap={20} justifyContent="flex-end" style={{ marginTop: "30px" }}>
				<Grid container gap={5} flexDirection="column">
					<StyledLabel>Periode</StyledLabel>
					<Select items={periode} onChange={handleChangePeriode} defaultValue={periode[0]} />
				</Grid>
			</Grid>
			{/* <Grid container alignItems="flex-end" style={{ minWidth: "140px", marginBottom: "2px" }}>
				<StyledButton onClick={exportToExcel}>Export</StyledButton>
			</Grid> */}
		</Grid>
	);
};

export default FilterPeriod;
