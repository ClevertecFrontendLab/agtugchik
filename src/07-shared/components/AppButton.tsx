import { Button, ButtonProps } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';

interface Props extends ButtonProps {
    children: ReactNode;
}

export const AppButton = memo(({ children, ...rest }: Props) => (
    <Button
        _focus={{ outline: 'none' }}
        _hover={{ borderColor: 'rgba(0, 0, 0, 0.48)' }}
        border='1px solid rgba(0, 0, 0, 0.48)'
        backgroundColor='white'
        padding={0}
        variant='outline'
        {...rest}
    >
        {children}
    </Button>
));
