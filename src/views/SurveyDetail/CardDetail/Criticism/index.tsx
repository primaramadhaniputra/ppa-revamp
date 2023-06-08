import { Grid } from "@hudoro/neron";
import UserNameWithPosition from "molecules/UserNameWithPosition";
import { timeConverter } from "utils/functions";
import { IPromiseResult, ISurveyReportCriticism } from "utils/interfaces";
import { Container, DateText, ValueText } from "./styles";
import { getCriticismReport } from "services/survey";
import { useAsync } from "utils/customHooks";
import { useRouter } from "next/router";

const Criticism = () => {
	const router = useRouter();
	const joinParams = (router.query.slug as string[])?.join("/");
	const { loading, response } = useAsync(
		() =>
			getCriticismReport({
				path: `criticism-suggestions/${joinParams}`,
			}),
		[],
		true,
	);
	if (loading) return <h1>Loading...</h1>;
	return (
		<Grid style={{ marginTop: "24px" }}>
			{(response as IPromiseResult).data.data.map((data: ISurveyReportCriticism, index: number) => (
				<Container key={index}>
					<Grid container gap={20} alignItems="center">
						<UserNameWithPosition name={data.fullName} position={data.position} />
						<Grid container style={{ marginLeft: "auto" }}>
							<DateText>{timeConverter(data.createdAt)}</DateText>
						</Grid>
					</Grid>
					<ValueText>{data.value}</ValueText>
				</Container>
			))}
		</Grid>
	);
};

export default Criticism;
