import { Grid } from "@hudoro/neron";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "utils/functions";
import { Link as L } from "utils/dummy";
import { ContainerLinks, ContainerSubmenu, SingleLink, StyledTextSubmenu } from "../styles";

const Links = () => {
	const { width } = useWindowSize();
	const [activeSubmenu, setActiveSubmenu] = useState(-1);

	const handleShowSubMenu = (index: number) => {
		if (index === activeSubmenu) {
			return setActiveSubmenu(-1);
		}
		return setActiveSubmenu(index);
	};

	return (
		<ContainerLinks>
			{L.map((item, index) => (
				<SingleLink
					key={index}
					onMouseEnter={() => (width > 1024 ? handleShowSubMenu(index) : {})}
					onMouseLeave={() => (width > 1024 ? handleShowSubMenu(-1) : {})}
					onClick={() => (width > 1024 ? {} : handleShowSubMenu(index))}
				>
					<Grid
						container
						gap={3}
						alignItems="center"
						style={{ cursor: "pointer", padding: "0 10px" }}
					>
						{item.subMenu ? (
							<p className="font-montserrat text-sm">{item.title}</p>
						) : (
							<Link href={`/dashboard/${item.title.toLowerCase()}`} passHref>
								<p className="font-montserrat text-sm">{item.title}</p>
							</Link>
						)}
					</Grid>
					<ContainerSubmenu activeSubMenu={activeSubmenu === index && true}>
						{item.subMenu?.map((data, idx) => (
							<Link href={`/dashboard/${data.subMenuLink}`} passHref key={idx}>
								<StyledTextSubmenu
									className="font-montserrat"
									style={{ fontSize: "12px", cursor: "pointer" }}
								>
									{data.subMenuTitle}
								</StyledTextSubmenu>
							</Link>
						))}
					</ContainerSubmenu>
				</SingleLink>
			))}
		</ContainerLinks>
	);
};

export default Links;
