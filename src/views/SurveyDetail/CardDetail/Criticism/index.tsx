import { Grid } from "@hudoro/neron";
import UserNameWithPosition from "molecules/UserNameWithPosition";
import { timeConverter } from "utils/functions";
import { ISurveyReportCriticism } from "utils/interfaces";
import { Container, DateText, ValueText } from "./styles";

interface Iprops {
	data: ISurveyReportCriticism;
}
const Criticism = ({ data }: Iprops) => {
	return (
		<Container>
			<Grid container gap={20} alignItems="center">
				<UserNameWithPosition name={data.fullName} position={data.position} />
				<Grid container style={{ marginLeft: "auto" }}>
					<DateText>{timeConverter(data.createdAt)}</DateText>
				</Grid>
			</Grid>
			<ValueText>{data.value}</ValueText>
		</Container>
	);
};

export default Criticism;
