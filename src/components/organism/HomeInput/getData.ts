import { getOperationReport as getReport } from 'services/operationReport';
import { notify } from 'utils/functions';
import { IOperationReportPayloadData } from 'utils/interfaces';

export default async function getOperationReport(
    type: string,
    startDate: string,
    endDate: string,
    setDataChart: React.Dispatch<React.SetStateAction<IOperationReportPayloadData | undefined>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
    setIsLoading(true);
    try {
        setIsLoading(true);
        const data = await getReport({
            params: {
                startedAt: startDate,
                endedAt: endDate,
            },
            headers: {
                Tenant: 'MHU',
            },
            path: `/${type}`,
        });
        setDataChart(data.data.data);
        setIsLoading(false);
        return notify(`succes get ${type}`, 'success');
    } catch (error: any) {
        setIsLoading(false);
        return notify(error.message);
    }
}
