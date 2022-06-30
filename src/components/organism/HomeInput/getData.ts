import { Dispatch, SetStateAction } from "react";
import { getPayload } from "services/operationReport";
import { notify } from "utils/functions";
import { IOperationReportPayloadData } from "utils/interfaces";

export default async function getOperationReport(
  type: string,
  startDate: string,
  endDate: string,
  setDataChart: Dispatch<
    SetStateAction<IOperationReportPayloadData | undefined>
  >,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (type === "Payload") {
    setIsLoading(true);
    try {
      const data = await getPayload({
        params: {
          startedAt: startDate,
          endedAt: endDate,
        },
        headers: {
          Tenant: "MHU",
        },
        path: "/payloads",
      });
      setDataChart(data.data.data);
      setIsLoading(false);
      return notify("succes get payload", "success");
    } catch (error: any) {
      setIsLoading(false);
      return notify(error.message);
    }
  }
  return console.log(type, startDate, endDate);
}
