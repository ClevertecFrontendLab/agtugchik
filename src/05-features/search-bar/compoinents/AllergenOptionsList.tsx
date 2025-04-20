import { Box, CheckboxGroup, Stack } from '@chakra-ui/react';

import { CustomCheckbox } from './CustomCheckbox';

type AllergenOptionsListProps = {
    allergenOptions: string[];
    selectedAllergens: string[];
    toggleAllergen: (value: string) => void;
};

export const AllergenOptionsList = ({
    allergenOptions,
    selectedAllergens,
    toggleAllergen,
}: AllergenOptionsListProps) => (
    <CheckboxGroup value={selectedAllergens}>
        <Stack spacing={0}>
            {allergenOptions.map((option, index) => (
                <Box
                    key={option}
                    bg={index % 2 === 0 ? 'rgba(0,0,0,0.04)' : 'transparent'}
                    px='14px'
                    py='8px'
                >
                    <CustomCheckbox value={option} onChange={() => toggleAllergen(option)}>
                        {option}
                    </CustomCheckbox>
                </Box>
            ))}
        </Stack>
    </CheckboxGroup>
);
