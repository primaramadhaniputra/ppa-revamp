import { Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";
import FileSaver from "file-saver";
import XLSX from "sheetjs-style";

interface IProps {
  setYears: React.Dispatch<React.SetStateAction<number>>;
  setSemester: React.Dispatch<React.SetStateAction<number>>;
}

const FilterPeriod = ({ setYears, setSemester }: IProps) => {
  const exportToExcel = () => {
    const fileName = "Excel Export";
    const excelData = [
      {
        firstName: "dani",
        lastName: "ganteng",
        desc: "dani ganteng banget",
      },
    ];

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Grid container gap={20} justifyContent="space-between">
      <Grid container gap={20} justifyContent="flex-end" style={{ marginTop: "30px" }}>
        <UltimateInput
          isInput={true}
          type="number"
          min={2020}
          max={2030}
          defaultValue={2020}
          title="Tahun"
          onChange={(e) => setYears(parseInt(e.target.value))}
        />
        <UltimateInput
          isInput={true}
          type="number"
          min={1}
          max={10}
          defaultValue={1}
          title="Semester"
          onChange={(e) => setSemester(parseInt(e.target.value))}
        />
      </Grid>
      <Grid container alignItems="flex-end" style={{ minWidth: "140px" }}>
        <StyledButton onClick={exportToExcel}>Export</StyledButton>
      </Grid>
    </Grid>
  );
};

export default FilterPeriod;
