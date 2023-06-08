import { Avatar, Grid } from "@hudoro/neron";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useParticipantsState } from "recoil/participants/atom";
import { Container, PaginationContainer, UserJob, UserName, Wrapper } from "./styles";
import ReactPaginate from "react-paginate";
import { useMetaState } from "recoil/meta/atom";
import { getPartisipan } from "services/survey";
import { useRouter } from "next/router";
import { useAsync } from "utils/customHooks";
import { IPromiseResult } from "utils/interfaces";

interface IProps {
	setIdDetailParticsipan: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const UserProfile = ({ setIdDetailParticsipan }: IProps) => {
	const [idActiveCard, setIdActiveCard] = useState("");
	const [partisipans, setPartisipans] = useParticipantsState();
	const [meta, setMeta] = useMetaState();
	const router = useRouter();
	const joinParams = (router.query.slug as string[])?.join("/");
	const [currentPage, setCurrentPage] = useState(0);

	const { loading, response } = useAsync(
		() =>
			getPartisipan({
				path: `participates/${joinParams}`,
				params: {
					page: currentPage + 1,
					perPage: 3,
				},
			}),
		[currentPage],
		true,
	);

	setMeta((response as IPromiseResult)?.data.meta);
	setPartisipans((response as IPromiseResult)?.data.data);
	console.log(response);

	const handlePageClick = (event: any) => {
		setIdDetailParticsipan(undefined);
		setIdActiveCard("");
		setCurrentPage(event.selected);
	};

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
		<Grid>
			<Wrapper>
				{loading ? (
					<h1>Loading</h1>
				) : (
					partisipans?.map((item, index) => (
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
					))
				)}
			</Wrapper>
			<PaginationContainer>
				<ReactPaginate
					activeClassName="active_pagination"
					breakLabel="..."
					nextLabel=" >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={meta?.totalPage}
					previousLabel="< "
				/>
			</PaginationContainer>
		</Grid>
	);
};

export default UserProfile;
