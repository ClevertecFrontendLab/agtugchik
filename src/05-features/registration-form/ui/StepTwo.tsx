import { Box, Progress, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useValidationProgress } from '~/07-shared/hooks';
import { AuthFormButton, FormInput } from '~/07-shared/ui';

import { stepTwoSchema } from '../model/schemas';
import { RegisterFormValues } from '../types/form-values';

interface Props {
    form: RegisterFormValues;
    onSubmit: (data: Pick<RegisterFormValues, 'login' | 'password' | 'confirmPassword'>) => void;
    updateProgress: (percentage: number) => void;
    progress: number;
}

export const StepTwo = ({ form, onSubmit, updateProgress, progress }: Props) => {
    const methods = useForm<Pick<RegisterFormValues, 'login' | 'password' | 'confirmPassword'>>({
        defaultValues: {
            login: form.login,
            password: form.password,
            confirmPassword: form.confirmPassword,
        },
        resolver: yupResolver(stepTwoSchema),
    });

    const { handleSubmit } = methods;

    useValidationProgress(methods, ['login', 'password', 'confirmPassword'], 6, updateProgress);

    return (
        <FormProvider {...methods}>
            <Box as='form' onSubmit={handleSubmit(onSubmit)} w='100%'>
                <VStack spacing={4} align='stretch'>
                    <Box
                        sx={{
                            fontFamily: 'var(--font-family)',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '150%',
                            color: '#000',
                        }}
                    >
                        Шаг 2. Логин и пароль
                        <Progress
                            value={progress}
                            width='100%'
                            height='8px'
                            bg='rgba(0, 0, 0, 0.06)'
                            sx={{
                                '& > div': {
                                    background: '#c4ff61',
                                },
                            }}
                        />
                    </Box>

                    <FormInput
                        name='login'
                        label='Логин для входа на сайт'
                        placeholder='Логин'
                        helperText='Логин не менее 5 символов, только латиница'
                    />

                    <FormInput
                        name='password'
                        label='Пароль'
                        placeholder='Пароль'
                        type='password'
                        showTogglePassword
                        helperText='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    />

                    <FormInput
                        name='confirmPassword'
                        label='Повторите пароль'
                        placeholder='Повторите пароль'
                        type='password'
                        showTogglePassword
                    />
                    <AuthFormButton>Зарегестрироваться</AuthFormButton>
                </VStack>
            </Box>
        </FormProvider>
    );
};
