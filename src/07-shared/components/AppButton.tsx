import { Button, ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';

export const AppButton = memo((props: ButtonProps) => (
    <Button
        _focus={{ outline: 'none' }}
        _hover={{ borderColor: 'rgba(0, 0, 0, 0.48)' }}
        border={props.border || '1px solid rgba(0, 0, 0, 0.48)'}
        backgroundColor='white'
        padding={0}
        variant='outline'
        {...props}
    />
));
