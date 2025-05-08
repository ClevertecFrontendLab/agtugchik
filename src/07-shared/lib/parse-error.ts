import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const parseError = (error: FetchBaseQueryError | SerializedError | undefined) => {
    if (!error) return 'Неизвестная ошибка';

    if ('status' in error) {
        if (typeof error.data === 'string') return error.data;
        if (typeof error.data === 'object') return JSON.stringify(error.data);
        return `Ошибка сервера: ${error.status}`;
    }

    if ('message' in error && error.message) {
        return error.message;
    }

    return 'Неизвестная ошибка';
};
