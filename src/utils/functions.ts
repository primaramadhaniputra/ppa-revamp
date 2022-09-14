import { toast } from 'react-toastify';
import { NotificationType } from './types';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

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

export const parseJwt = (token: string) => {
    const base64Payload = token.split('.')[1];
    const payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
};

export const renderType = (type: string) => {
    switch (type) {
        case 'device_production_payload':
            return 'payloads';
        case 'device_production_empty_stop':
            return 'empty-stop';
        case 'device_production_loading_time':
            return 'loading-time';
        case 'device_production_speed':
            return 'speed';
        case 'device_production_loaded_speed':
            return 'loaded-speed';
        // case 'report_device_production_empty_speed':
        //     return 'empty_speed';
        default:
            return 'payloads';
    }
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return windowSize;
}

export const exportFile = () => {
    var blob = new Blob(['testing'], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'testfile1.txt');
};

export const convertDataToPercentage = (
    plan: string | null | number,
    production: string | null | number
) => {
    if (!plan && !production) {
        return 0;
    } else if (plan && production) {
        return ((parseFloat(production as string) / parseFloat(plan as string)) * 100) / 100;
    } else if (!plan && production) {
        return 100;
    } else if (plan && !production) {
        return 100;
    }
    return 0;
};
