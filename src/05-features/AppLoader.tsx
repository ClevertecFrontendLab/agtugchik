import { Box, Portal } from '@chakra-ui/react';

import { userLoadingSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';
import { AppSpinner } from '~/07-shared/components';

export const AppLoader = () => {
    const isLoading = useAppSelector(userLoadingSelector);

    return (
        <>
            {isLoading ? (
                <Portal>
                    <Box
                        position='fixed'
                        top={0}
                        left={0}
                        width='100vw'
                        height='100vh'
                        bg='rgba(0, 0, 0, 0.3)'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        zIndex={9999}
                    >
                        <AppSpinner data-test-id='app-loader' />
                    </Box>
                </Portal>
            ) : (
                <></>
            )}
        </>
    );
};
