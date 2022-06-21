import { toast } from 'react-toastify';
import { NotificationType } from './types';

export const resolveBackendValidationError = (errorData: any) => {
    if (errorData && errorData.errors) {
        const errorKeys = Object.keys(errorData.errors);
        const firstErrorKey = errorKeys[0];

        if (firstErrorKey) {
            const firstErrorList = errorData.errors[firstErrorKey];
            const firstErrorMessage = firstErrorList[0];
            if (firstErrorMessage) {
                return {
                    ...errorData,
                    message: firstErrorMessage,
                };
            }
        }
    }
    return errorData;
};

export const notify = (message: string, type?: NotificationType) => {
    switch (type) {
        case 'success':
            return toast.success(`${message}`);
        case 'error':
            return toast.error(`${message}`);
        case 'warning':
            return toast.warn(`${message}`);
        case 'info':
            return toast.info(`${message}`);
        case 'dark':
            return toast.dark(`${message}`);
        case 'loading':
            return toast.loading(`${message}`);
        default:
            return toast(`${message}`);
    }
};

export function convert(str: string | number | Date | null) {
    let date = new Date(str as string | number | Date),
        mnth = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
}
