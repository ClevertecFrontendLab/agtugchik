import { Box, Progress, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useValidationProgress } from '~/07-shared/hooks';
import { AuthFormButton, FormInput } from '~/07-shared/ui';

import { stepOneSchema } from '../model/schemas';
import { RegisterFormValues } from '../types/form-values';

interface Props {
    form: RegisterFormValues;
    onNext: (data: Pick<RegisterFormValues, 'firstName' | 'lastName' | 'email'>) => void;
    updateProgress: (percentage: number) => void;
    progress: number;
}

export const StepOne = ({ form, onNext, updateProgress, progress }: Props) => {
    const methods = useForm<Pick<RegisterFormValues, 'firstName' | 'lastName' | 'email'>>({
        defaultValues: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
        },
        resolver: yupResolver(stepOneSchema),
    });

    const onSubmit = methods.handleSubmit(onNext);

    useValidationProgress(methods, ['firstName', 'lastName', 'email'], 6, updateProgress);

    return (
        <FormProvider {...methods}>
            <Box as='form' onSubmit={onSubmit} w='100%'>
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
                        Шаг 1. Личная информация
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
                    <FormInput name='firstName' label='Ваше имя' placeholder='Имя' />
                    <FormInput name='lastName' label='Ваша фамилия' placeholder='Фамилия' />
                    <FormInput name='email' label='Ваш e-mail' placeholder='e-mail' type='email' />
                    <AuthFormButton>Дальше</AuthFormButton>
                </VStack>
            </Box>
        </FormProvider>
    );
};
