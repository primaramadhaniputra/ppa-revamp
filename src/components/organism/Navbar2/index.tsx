import { Avatar, Grid, Icon } from "@hudoro/neron";
import React, { useState } from "react";
import { useWindowSize } from "utils/customHooks";
import { Link } from "utils/dummy";
import {
	ContainerLinks,
	ContainerLogo,
	ContainerSubmenu,
	ContainerUser,
	SingleLink,
	Styledtext,
	StyledTextSubmenu,
	Wrapper,
} from "./styles";

const Navbar2 = () => {
	const [isShowMenu, setisShowMenu] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(-1);
	const { width } = useWindowSize();

	const handleShowMenu = () => {
		setisShowMenu(!isShowMenu);
	};
	const handleShowSubMenu = (index: number) => {
		if (index === activeSubmenu) {
			return setActiveSubmenu(-1);
		}
		return setActiveSubmenu(index);
	};

	return (
		<Wrapper showMenu={isShowMenu}>
			<ContainerLogo>
				<Avatar
					src="/logo/ppa.jpg"
					size="m"
					style={{ height: "35px", width: "35px", cursor: "pointer" }}
					alt="ppa logo"
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
			<ContainerUser>
				<Avatar
					src="/icons/tukang.jpg"
					size="m"
					style={{ height: "35px", width: "35px" }}
					alt="user image"
				/>
				<Icon iconName="IcArrowDown" color="white" style={{ cursor: "pointer" }} />
			</ContainerUser>
			{(width < 1024 && isShowMenu) || (
				<ContainerLinks>
					{Link.map((item, index) => (
						<SingleLink key={index}>
							<Grid container gap={3} alignItems="center">
								<Styledtext>{item.title}</Styledtext>
								<Icon
									iconName={activeSubmenu === index ? "IcArrowUp" : "IcArrowDown"}
									color="white"
									style={{ cursor: "pointer" }}
									onClick={() => handleShowSubMenu(index)}
								/>
							</Grid>
							{activeSubmenu === index && (
								<ContainerSubmenu>
									{item.subMenu.map((data) => (
										<StyledTextSubmenu style={{ fontSize: "12px", cursor: "pointer" }}>
											{data.subMenuTitle}
										</StyledTextSubmenu>
									))}
								</ContainerSubmenu>
							)}
						</SingleLink>
					))}
				</ContainerLinks>
			)}
		</Wrapper>
	);
};

export default Navbar2;
