import { Box, Button } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import { AuthFormButton, FormInput } from '~/07-shared/ui';

interface LoginFormValues {
    login: string;
    password: string;
}

export const LoginForm = () => {
    const methods = useForm<LoginFormValues>({
        defaultValues: {
            login: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log('Login data:', data);
        // TODO: реализовать отправку данных
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box mb='4'>
                    <FormInput
                        name='login'
                        label='Логин для входа на сайт'
                        placeholder='Введите логин'
                    />
                </Box>

                <Box mb='6'>
                    <FormInput
                        name='password'
                        label='Пароль'
                        placeholder='Пароль для сайта'
                        type='password'
                        showTogglePassword
                    />
                </Box>

                <AuthFormButton>Войти</AuthFormButton>

                <Button
                    variant='link'
                    h='48px'
                    w='100%'
                    fontFamily='var(--font-family)'
                    fontWeight='600'
                    fontSize='16px'
                    lineHeight='150%'
                    color='#000'
                >
                    Забыли логин или пароль?
                </Button>
            </form>
        </FormProvider>
    );
};
