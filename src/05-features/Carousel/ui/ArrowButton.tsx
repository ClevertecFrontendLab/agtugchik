import { Button, ButtonProps, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import arrow from '~/07-shared/assets/svg/carousel-arrow.svg';

interface Props extends ButtonProps {
    arrowDirection: 'right' | 'left';
}

export const ArrowButton = ({ arrowDirection, ...props }: Props) => {
    const { pathname } = useLocation();

    return (
        <Button
            display={{ lg: 'flex', base: 'none' }}
            zIndex={11}
            position='absolute'
            top={{
                xl: pathname !== '/' ? '2172px' : '551px',
                lg: pathname !== '/' ? '2100px' : '505px',
            }}
            left={arrowDirection === 'left' ? '270px' : undefined}
            right={arrowDirection === 'right' ? '266px' : undefined}
            bg='black'
            color='white'
            borderRadius='6px'
            px='12px'
            py='0'
            w={{ xl: '48px', lg: '40px' }}
            h={{ xl: '48px', lg: '40px' }}
            _hover={{ bg: 'black' }}
            _active={{ bg: 'black' }}
            {...props}
        >
            <Image
                src={arrow}
                alt='Arrow icon'
                transform={arrowDirection === 'right' ? 'rotate(180deg)' : undefined}
                boxSize={{ xl: '24px', lg: '16px' }}
            />
        </Button>
    );
};
