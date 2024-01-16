import { Avatar } from "@hudoro/neron";
import { useRouter } from "next/router";
import { useWindowSize } from "utils/customHooks";
import Links from "./Links";
import { ContainerLogo, Wrapper } from "./styles";
import User from "./User";

const Navbar2 = () => {
	const { width } = useWindowSize();
	const router = useRouter();

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
			</ContainerLogo>
			<User />
			{width > 640 ? <Links /> : null}
		</Wrapper>
	);
};

export default Navbar2;
