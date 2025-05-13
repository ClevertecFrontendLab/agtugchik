import { Switch, SwitchProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppSwitch = memo((props: SwitchProps) => (
    <Switch
        sx={{
            'span.chakra-switch__track': {
                bg: 'rgba(0, 0, 0, 0.16)',
                _checked: {
                    bg: 'var(--lime400)',
                },
            },
        }}
        {...props}
    />
));
