import { Avatar, Grid } from "@hudoro/neron";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useParticipantsValue } from "recoil/participants/atom";
import { Container, UserJob, UserName, Wrapper } from "./styles";
// import ReactPaginate from "react-paginate";

interface IProps {
	setIdDetailParticsipan: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const UserProfile = ({ setIdDetailParticsipan }: IProps) => {
	const [idActiveCard, setIdActiveCard] = useState("");
	const partisipans = useParticipantsValue();

	// const handlePageClick = (event: any) => {
	// 	console.log("event", event.selected);
	// };

	const handleActiveCard = (id: string, fullName: string, companyName: string) => {
		Cookies.set("fullName", fullName);
		Cookies.set("companyName", companyName);
		if (idActiveCard === id) {
			setIdDetailParticsipan(undefined);
			return setIdActiveCard("");
		}
		setIdDetailParticsipan(id);
		return setIdActiveCard(id);
	};

	return (
		<Wrapper>
			{partisipans.map((item, index) => (
				<Container
					key={index}
					isActiveCard={idActiveCard === item.id}
					onClick={() => handleActiveCard(item.id, item.fullName, item.companyName)}
				>
					<Avatar size="l" alt="userProfile" src={item.logoUrl} />
					<Grid>
						<UserName>{item.fullName}</UserName>
						<UserJob>{item.companyName}</UserJob>
					</Grid>
				</Container>
			))}
			{/* <PaginationContainer>
				<ReactPaginate
					activeClassName="active_pagination"
					// initialPage={1}
					breakLabel="..."
					nextLabel=" >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={8}
					previousLabel="< "
					// renderOnZeroPageCount={null}
				/>
			</PaginationContainer> */}
		</Wrapper>
	);
};

export default UserProfile;
