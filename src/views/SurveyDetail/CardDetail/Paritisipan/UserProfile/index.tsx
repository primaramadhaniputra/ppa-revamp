import { Avatar, Grid } from "@hudoro/neron";
import React, { useState } from "react";
import { Container, PaginationContainer, UserJob, UserName, Wrapper } from "./styles";
import ReactPaginate from "react-paginate";

const arr = new Array(3).fill(0);

const UserProfile = () => {
	const [idActiveCard, setIdActiveCard] = useState(-1);

	const handlePageClick = (event: any) => {
		console.log("event", event.selected);
	};

	const handleActiveCard = (id: number) => {
		if (idActiveCard === id) {
			return setIdActiveCard(-1);
		}
		return setIdActiveCard(id);
	};

	return (
		<Wrapper>
			{arr.map((_, index) => (
				<Container
					key={index}
					isActiveCard={idActiveCard === index}
					onClick={() => handleActiveCard(index)}
				>
					<Avatar size="l" alt="userProfile" src="/logo/ppa.jpg" />
					<Grid>
						<UserName>Nom Nom</UserName>
						<UserJob>PT Makmur Lestari Primata</UserJob>
					</Grid>
				</Container>
			))}
			<PaginationContainer>
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
			</PaginationContainer>
		</Wrapper>
	);
};

export default UserProfile;
