import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const AppButton = ({ children }: Props) => (
    <Button
        _focus={{ outline: 'none' }}
        _hover={{ borderColor: 'rgba(0, 0, 0, 0.48)' }}
        border='1px solid rgba(0, 0, 0, 0.48);'
        backgroundColor='white'
        padding={0}
        variant='outline'
    >
        {children}
    </Button>
);
