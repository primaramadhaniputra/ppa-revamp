import { ISelectItem, Select } from "@hudoro/neron";
import TitlePage from "atoms/TitlePage";
import React, { useState } from "react";
import { useWindowSize } from "utils/functions";
import { fontWeights } from "utils/styles";
import AttendanceRevision from "./AttendanceRevision";
import BenefitClaimVoucher from "./BenefitClaimVoucher";
import EmployeeMutation from "./EmployeeMutation";
import LeavingApplication from "./LeavingApplication";
import SetRoster from "./SetRoster";
import { SelectContainer, TabsContainer, TabsText } from "./styles";
import SuratPelanggaran from "./SuratPelanggaran";
import SuratPerintahLembur from "./SuratPerintahLembur";
import UpdateRoster from "./UpdateRoster";
import UploadDar from "./UploadDar";
import UploadRoster from "./UploadRoster";
import UploadSpl from "./UploadSpl";

const selectItems = [
	{ id: 1, values: "Upload Roster", label: "Upload Roster" },
	{ id: 2, values: "Update Roster", label: "Update Roster" },
	{ id: 3, values: "Set Roster", label: "Set Roster" },
	{ id: 4, values: "Attendance Revision", label: "Attendance Revision" },
	{ id: 5, values: "Upload SPL", label: "Upload SPL" },
	{ id: 6, values: "Upload DAR", label: "Upload DAR" },
	{ id: 7, values: "Leaving Application", label: "Leaving Application" },
	{ id: 8, values: "Benefit Claim Voucher", label: "Benefit Claim Voucher" },
	{ id: 9, values: "Surat Perintah Lembur", label: "Surat Perintah Lembur" },
	{ id: 10, values: "Surat Pelanggaran", label: "Surat Pelanggaran" },
	{ id: 11, values: "Employee Mutation", label: "Employe Mutation" },
];

const tabsData = [
	"Upload Roster",
	"Update Roster",
	"Set Roster",
	"Attendance Revision",
	"Upload SPL",
	"Upload DAR",
	"Leaving Application",
	"Benefit Claim Voucher",
	"Surat Perintah Lembur",
	"Surat Pelanggaran",
	"Employee Mutation",
];

const renderContent = (type: string) => {
	if (type === "Upload Roster") {
		return <UploadRoster />;
	} else if (type === "Update Roster") {
		return <UpdateRoster />;
	} else if (type === "Set Roster") {
		return <SetRoster />;
	} else if (type === "Attendance Revision") {
		return <AttendanceRevision />;
	} else if (type === "Leaving Application") {
		return <LeavingApplication />;
	} else if (type === "Benefit Claim Voucher") {
		return <BenefitClaimVoucher />;
	} else if (type === "Surat Perintah Lembur") {
		return <SuratPerintahLembur />;
	} else if (type === "Surat Pelanggaran") {
		return <SuratPelanggaran />;
	} else if (type === "Employee Mutation") {
		return <EmployeeMutation />;
	} else if (type === "Upload SPL") {
		return <UploadSpl />;
	} else if (type === "Upload DAR") {
		return <UploadDar />;
	}
};

export default function Form() {
	const width = useWindowSize();
	const [selectedItem, setSelectedItem] = useState("Upload Roster");
	const handleSelect = (e: ISelectItem | ISelectItem[]) => {
		setSelectedItem(e.values);
	};
	return (
		<>
			<TitlePage type="h3" styles={{ fontSize: "22px" }}>
				Team Work / Form
			</TitlePage>
			{width.width > 900 ? (
				<TabsContainer>
					{tabsData.map((item, index) => (
						<TabsText
							style={{
								backgroundColor: selectedItem === item ? "white" : "",
								fontWeight: selectedItem === item ? fontWeights.extraBold : fontWeights.regular,
							}}
							key={index}
							onClick={() => setSelectedItem(item)}
						>
							{item}
						</TabsText>
					))}
				</TabsContainer>
			) : (
				<SelectContainer>
					<label>Menu</label>
					<Select
						items={selectItems}
						defaultValue={{ id: 1, values: selectedItem, label: selectedItem }}
						onChange={handleSelect as any}
					/>
				</SelectContainer>
			)}
			{renderContent(selectedItem)}
		</>
	);
}
