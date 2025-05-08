import { Box } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';

import { useGetCategoriesQuery } from '~/01-app/query/services/categories';
import { setAppCategories } from '~/01-app/store/app-slice';
import { useAppDispatch } from '~/01-app/store/hooks';
import layoutConfig from '~/07-shared/consts/app-layout-config';
import useAppStatus from '~/07-shared/hooks/use-app-status';
import { parseError } from '~/07-shared/lib';

interface Props {
    children: ReactNode;
}

export const AppContainer = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const {
        data: categories,
        isLoading: isLoadingCategories,
        isError: isErrorCategories,
        error: errorCategories,
    } = useGetCategoriesQuery(undefined, {
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
        skipPollingIfUnfocused: true,
    });

    useAppStatus(isLoadingCategories, isErrorCategories, parseError(errorCategories));

    useEffect(() => {
        dispatch(setAppCategories(categories || []));
    }, [dispatch, categories]);
    return (
        <Box
            p={{
                lg: `${layoutConfig.header.height.xl} ${layoutConfig.sider.width} 0 ${layoutConfig.nav.width}`,
                base: `${layoutConfig.header.height.base} 0 ${layoutConfig.footer.height.base} 0`,
            }}
            w='full'
            background='#fff'
        >
            {children}
        </Box>
    );
};
