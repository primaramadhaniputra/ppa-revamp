import { useState } from "react";

const ModalHooks = () => {
	const [isOpenModal, setisOpenModal] = useState(false);

	const handleCloseModal = () => {
		setisOpenModal(false);
	};

	const handleOpenModal = () => {
		setisOpenModal(true);
	};

	return { isOpenModal, handleCloseModal, handleOpenModal };
};

export default ModalHooks;
