import { useEffect } from 'react';

import { setAppError, setAppLoader } from '~/01-app/store/app-slice';
import { useAppDispatch } from '~/01-app/store/hooks';

export const useAppStatus = (isLoading: boolean, isError: boolean, error?: string) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isError) {
            dispatch(setAppLoader(false));
            dispatch(setAppError(error || ''));
        } else dispatch(setAppError(null));
    }, [dispatch, isError, error]);

    useEffect(() => {
        dispatch(setAppLoader(isLoading));
    }, [dispatch, isLoading]);
};
