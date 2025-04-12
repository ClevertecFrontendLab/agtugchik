import { Button, Image } from '@chakra-ui/react';

import arrow from '~/07-shared/assets/svg/carousel-arrow.svg';

interface Props {
    type: 'right' | 'left';
}

export const ArrowButton = ({ type }: Props) => (
    <Button
        display={{ lg: 'flex', base: 'none' }}
        zIndex={9}
        position='absolute'
        top={{ xl: '51%', lg: '97%' }}
        left={type === 'left' ? '270px' : undefined}
        right={type === 'right' ? '266px' : undefined}
        bg='black'
        color='white'
        borderRadius='6px'
        px='12px'
        py='0'
        w={{ xl: '48px', lg: '40px' }}
        h={{ xl: '48px', lg: '40px' }}
        _hover={{ bg: 'black' }}
        _active={{ bg: 'black' }}
    >
        <Image
            src={arrow}
            alt='Arrow icon'
            transform={type === 'right' ? 'rotate(180deg)' : undefined}
            boxSize={{ xl: '24px', lg: '16px' }}
        />
    </Button>
);
