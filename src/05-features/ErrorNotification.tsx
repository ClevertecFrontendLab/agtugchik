import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    Portal,
} from '@chakra-ui/react';

import { setAppError, userErrorSelector } from '~/01-app/store/app-slice';
import { useAppDispatch, useAppSelector } from '~/01-app/store/hooks';

export const ErrorNotification = () => {
    const error = useAppSelector(userErrorSelector);
    const dispatch = useAppDispatch();

    const closeHandler = () => {
        dispatch(setAppError(null));
    };
    return (
        <>
            {error ? (
                <Portal>
                    <Box
                        position='fixed'
                        top={0}
                        left={0}
                        width='100vw'
                        height='100vh'
                        bg='rgba(0, 0, 0, 0.3)'
                        display='flex'
                        alignItems='end'
                        justifyContent='center'
                        zIndex={9999}
                    >
                        <Alert
                            position='relative'
                            maxW='400px'
                            mb='100px'
                            status='error'
                            bg='var(--red500)'
                            borderRadius='4px'
                            alignItems='center'
                            data-test-id='error-notification'
                        >
                            <AlertIcon color='white' mt='1' />
                            <Box flex='1'>
                                <AlertTitle
                                    fontFamily='var(--font-family)'
                                    fontWeight='700'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    color='white'
                                    mb='1'
                                >
                                    Ошибка сервера
                                </AlertTitle>
                                <AlertDescription
                                    fontFamily='var(--font-family)'
                                    fontWeight='400'
                                    fontSize='16px'
                                    lineHeight='150%'
                                    color='white'
                                >
                                    Попробуйте поискать снова попозже
                                </AlertDescription>
                            </Box>
                            <CloseButton
                                position='absolute'
                                top='0'
                                right='0'
                                color='white'
                                data-test-id='close-alert-button'
                                onClick={closeHandler}
                            />
                        </Alert>
                    </Box>
                </Portal>
            ) : null}
        </>
    );
};
