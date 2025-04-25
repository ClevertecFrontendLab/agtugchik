import { Box, CheckboxGroup, Stack } from '@chakra-ui/react';

import { AppCheckbox } from '~/07-shared/components';

interface Props {
    options: { name: string; dataTestId: string }[];
    selectedValues: string[];
    toggleValue: (value: string) => void;
}

export const OptionsList = ({ options, selectedValues, toggleValue }: Props) => (
    <CheckboxGroup value={selectedValues}>
        <Stack spacing={0}>
            {options.map((option, index) => (
                <Box
                    key={option.name}
                    bg={index % 2 === 0 ? 'rgba(0,0,0,0.04)' : 'transparent'}
                    px='14px'
                    py='8px'
                >
                    <AppCheckbox
                        data-test-id={option.dataTestId}
                        value={option.name}
                        onChange={() => toggleValue(option.name)}
                    >
                        {option.name}
                    </AppCheckbox>
                </Box>
            ))}
        </Stack>
    </CheckboxGroup>
);
