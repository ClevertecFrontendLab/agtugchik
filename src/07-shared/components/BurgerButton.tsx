import { Button, ButtonProps, Image } from '@chakra-ui/react';

import burgerIcon from '~/07-shared/assets/svg/burger-icon.svg';

export const BurgerButton = (props: ButtonProps) => (
    <Button
        w='48px'
        h='48px'
        p='0'
        bg='transparent'
        border='none'
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
        _focus={{ boxShadow: 'none' }}
        _focusVisible={{ boxShadow: 'none' }}
        {...props}
    >
        <Image src={burgerIcon} alt='burger-button' />
    </Button>
);
