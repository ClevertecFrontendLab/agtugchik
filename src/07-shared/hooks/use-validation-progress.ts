import { useEffect, useRef } from 'react';
import { FieldPath, UseFormReturn } from 'react-hook-form';

export const useValidationProgress = <T extends object>(
    methods: UseFormReturn<T>,
    stepFields: FieldPath<T>[],
    totalFields: number,
    updateProgress: (progress: number) => void,
) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkValidFields = async () => {
            const results = await Promise.all(stepFields.map((field) => methods.trigger(field)));
            const validCount = results.filter(Boolean).length;
            const percentage = Math.round((validCount / totalFields) * 100);
            updateProgress(percentage);
        };

        const debounced = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                checkValidFields();
            }, 300);
        };

        const subscription = methods.watch(() => {
            debounced();
        });

        return () => {
            subscription.unsubscribe();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [methods, stepFields, totalFields, updateProgress]);
};
