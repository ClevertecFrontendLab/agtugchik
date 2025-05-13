import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const AuthFormButton = ({ children }: Props) => (
    <Button
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='6px'
        padding='0px 24px'
        height='48px'
        width='100%'
        type='submit'
        bg='rgba(0, 0, 0, 0.92)'
        fontFamily='var(--font-family)'
        fontWeight='600'
        fontSize='18px'
        lineHeight='156%'
        color='#fff'
    >
        {children}
    </Button>
);
