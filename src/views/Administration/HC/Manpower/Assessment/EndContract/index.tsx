import { Grid, Lozenge } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import { useWindowDimensions } from "utils/functions";
import AssmPending from "./AssmPending";
import ListEndContractTable from "./ListEndContractTable";
import MonitoringStatusTable from "./MonitoringStatusTable";
import SummaryTable from "./SummaryTable";

const EndContract = () => {
	const { width } = useWindowDimensions();
	const [isShowAssmPending, setIsShowAssmPending] = React.useState(false);
	const [formAssmPendingPosition, setformAssmPendingPosition] = React.useState(0);

	const handleShowAssmPending = (target: { pageY: number; clientY: number }) => {
		setIsShowAssmPending(true);
		setformAssmPendingPosition(target.pageY - target.clientY);
	};

	return (
		<>
			<AssmPending
				isShowAssmPending={isShowAssmPending}
				setIsShowAssmPending={setIsShowAssmPending}
				formAssmPendingPosition={formAssmPendingPosition}
			/>
			<Grid>
				<Grid
					container
					gap={20}
					flexDirection={width < 1000 ? "column" : "row"}
					style={{ overflow: "scroll" }}
				>
					<SummaryTable />
					<MonitoringStatusTable />
				</Grid>
				<Grid style={{ marginTop: "50px" }}>
					<StyledButton style={{ width: "max-content" }} onClick={handleShowAssmPending}>
						🎯 Assm.Pending <Lozenge label="16" variant="danger-strong" />{" "}
					</StyledButton>
					<ListEndContractTable />
				</Grid>
			</Grid>
		</>
	);
};

export default EndContract;
