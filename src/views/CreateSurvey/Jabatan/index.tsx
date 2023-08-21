import { Button, Grid } from "@hudoro/neron";
import { IcFilter } from "atoms/Icon";
import Modal from "molecules/Modal";
import ModalHooks from "molecules/Modal/ModalHooks";
import React, { useState } from "react";
import JabatanHeader from "./JabatanHeader";
import Perusahaan from "./Perusahaan";
import FilterJabatan from "./FilterJabatan";

const dataJabatan = [
	{
		label: "satu",
		id: "satu",
	},
	{
		label: "dua",
		id: "dua",
	},
	{
		label: "tiga",
		id: "tiga",
	},
	{
		label: "empat",
		id: "empat",
	},
	{
		label: "lima",
		id: "lima",
	},
];

const Jabatan = () => {
	const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks();

	const [dataChecked, setDataChecked] = useState<{ label: string; id: string }[]>([]);
	const [isCheckAll, setIsCheckAll] = useState(false);

	return (
		<>
			<Modal onClose={handleCloseModal} isShow={isOpenModal}>
				<JabatanHeader setDataChecked={setDataChecked} setIsCheckAll={setIsCheckAll} />
				<Grid container flexDirection="row" style={{ width: "90vw", maxWidth: "600px" }}>
					<Perusahaan />
					<FilterJabatan
						data={dataJabatan}
						dataChecked={dataChecked}
						setDataChecked={setDataChecked}
						isCheckAll={isCheckAll}
						setIsCheckAll={setIsCheckAll}
					/>
				</Grid>
			</Modal>
			<Grid>
				<Button
					onClick={handleOpenModal}
					variant="primary"
					style={{ backgroundColor: "#141bbe", borderRadius: "6px" }}
				>
					<Grid container alignItems="center" gap={4}>
						<span>Jabatan</span>
						<IcFilter width={14} />
					</Grid>
				</Button>
			</Grid>
		</>
	);
};

export default Jabatan;
