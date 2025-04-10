import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useLocation } from 'react-router';

interface FooterButtonProps extends ButtonProps {
    label: string;
    icon: ReactElement;
    path: string;
}

export const FooterButton = ({ label, icon, path, ...props }: FooterButtonProps) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Button
            background={
                isActive
                    ? 'radial-gradient(62.52% 62.51% at 48.89% 37.5%, rgba(196, 255, 97, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
                    : 'none'
            }
            variant='unstyled'
            w='25%'
            h='84px'
            display='flex'
            flexDirection='column'
            border='none'
            {...props}
        >
            {icon}

            <Text
                fontFamily='var(--font-family)'
                fontWeight={isActive ? 500 : 400}
                fontSize='12px'
                lineHeight='133%'
                textAlign='center'
                color='rgba(0, 0, 0, 0.64)'
            >
                {label}
            </Text>
        </Button>
    );
};
