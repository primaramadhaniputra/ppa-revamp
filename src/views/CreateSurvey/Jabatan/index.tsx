import { Button, Checkbox, Grid, Input, Text } from "@hudoro/neron";
import { IcFilter } from "atoms/Icon";
import Modal from "molecules/Modal";
import ModalHooks from "molecules/Modal/ModalHooks";
import React from "react";
import { JabatanContainer, PerusahaanContainer } from "./styles";

const Jabatan = () => {
	const { isOpenModal, handleCloseModal, handleOpenModal } = ModalHooks();
	return (
		<>
			<Modal onClose={handleCloseModal} isShow={isOpenModal} title="Filter Jabatan">
				<Grid container flexDirection="row" style={{ width: "90vw", maxWidth: "600px" }}>
					<PerusahaanContainer>
						<Text variant="p">Perusahaan</Text>
						<Text variant="p">PT. MHU</Text>
						<Text variant="p">PT. MHU</Text>
						<Text variant="p">PT. MHU</Text>
						<Text variant="p">PT. MHU</Text>
						<Text variant="p">PT. MHU</Text>
					</PerusahaanContainer>
					<JabatanContainer>
						<Grid
							style={{ borderBottom: "1px solid #ddd", padding: "10px 10px 8px 8px" }}
							container
							justifyContent="space-between"
						>
							<Text variant="p">Jabatan</Text>
							<Checkbox checked />
						</Grid>
						<Grid
							flexDirection="column"
							gap={12}
							container
							style={{ padding: "10px 10px 8px 8px" }}
						>
							<Input
								placeholder="Cari Jabatan Anda Disini"
								iconLeft="IcSearch"
								style={{ borderRadius: "4px" }}
							/>
							<Grid container justifyContent="space-between">
								<Text variant="p">Nama Jabatan</Text>
								<Checkbox checked />
							</Grid>
						</Grid>
					</JabatanContainer>
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
