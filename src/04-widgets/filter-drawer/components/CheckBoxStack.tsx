import { Stack } from '@chakra-ui/react';

import { AppCheckbox } from '~/07-shared/components';

interface Props {
    options: { name: string; dataTestId: string }[];
    selected: string[];
    toggleOption: (name: string) => void;
}

export const CheckboxStack = ({ options, selected, toggleOption }: Props) => (
    <Stack spacing={2}>
        {options.map(({ name, dataTestId }) => (
            <AppCheckbox
                key={name}
                value={name}
                isChecked={selected.includes(name)}
                onChange={() => toggleOption(name)}
                data-test-id={dataTestId}
            >
                {name}
            </AppCheckbox>
        ))}
    </Stack>
);
