import { Avatar, Icon } from "@hudoro/neron";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useWindowSize } from "utils/customHooks";
import Links from "./Links";
// import Link from 'next/link'
import { ContainerLogo, Wrapper } from "./styles";
import User from "./User";

const Navbar2 = () => {
	const [isShowMenu, setisShowMenu] = useState(false);
	const { width } = useWindowSize();
	const router = useRouter();

	const handleShowMenu = () => {
		setisShowMenu(!isShowMenu);
	};

	const backToHome = () => {
		router.push("/dashboard");
	};

	return (
		<Wrapper>
			<ContainerLogo>
				<Avatar
					src="/logo/ppa.jpg"
					size="m"
					style={{ height: "35px", width: "35px", cursor: "pointer" }}
					alt="ppa logo"
					onClick={backToHome}
				/>
				{width < 1024 && (
					<Icon
						iconName="IcHamburger"
						size={32}
						color="white"
						style={{ cursor: "pointer" }}
						onClick={handleShowMenu}
					/>
				)}
			</ContainerLogo>
			<User />
			{(width < 1024 && isShowMenu) || <Links />}
		</Wrapper>
	);
};

export default Navbar2;
