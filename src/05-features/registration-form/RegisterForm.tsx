import { VStack } from '@chakra-ui/react';
import { useState } from 'react';

import { RegisterFormValues } from './types/form-values';
import { StepOne } from './ui/StepOne';
import { StepTwo } from './ui/StepTwo';

const initialForm: RegisterFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
    confirmPassword: '',
};

export const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState<RegisterFormValues>(initialForm);
    const [step1Progress, setStep1Progress] = useState(0);
    const [step2Progress, setStep2Progress] = useState(0);

    const handleNext = (data: Pick<RegisterFormValues, 'firstName' | 'lastName' | 'email'>) => {
        setForm((prev) => ({ ...prev, ...data }));
        setStep(2);
    };

    const handleRegister = (
        data: Pick<RegisterFormValues, 'login' | 'password' | 'confirmPassword'>,
    ) => {
        const finalData = { ...form, ...data };
        console.log('Final registration data:', finalData);
    };

    const updateProgress = (
        setProgress: React.Dispatch<React.SetStateAction<number>>,
        percentage: number,
    ) => {
        setProgress(percentage);
    };

    return (
        <VStack as='section' spacing={4} w='full'>
            {step === 1 && (
                <StepOne
                    form={form}
                    onNext={handleNext}
                    updateProgress={updateProgress.bind(null, setStep1Progress)}
                    progress={step1Progress + step2Progress}
                />
            )}
            {step === 2 && (
                <StepTwo
                    form={form}
                    onSubmit={handleRegister}
                    updateProgress={updateProgress.bind(null, setStep2Progress)}
                    progress={step1Progress + step2Progress}
                />
            )}
        </VStack>
    );
};
