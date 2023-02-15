import { Avatar, Grid } from "@hudoro/neron";
import React from "react";
import { Container, PaginationContainer, UserJob, UserName } from "./styles";
import ReactPaginate from "react-paginate";

const UserProfile = () => {
	const handlePageClick = (event: any) => {
		console.log("event", event.selected);
	};

	return (
		<Grid>
			<Container>
				<Avatar size="l" alt="userProfile" src="/logo/ppa.jpg" />
				<Grid>
					<UserName>Nom Nom</UserName>
					<UserJob>PT Makmur Lestari Primata</UserJob>
				</Grid>
			</Container>
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
		</Grid>
	);
};

export default UserProfile;
