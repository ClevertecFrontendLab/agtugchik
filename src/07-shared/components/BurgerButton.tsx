import { Button, ButtonProps, Image } from '@chakra-ui/react';

import burgerIcon from '~/07-shared/assets/svg/burger-icon.svg';
import exitBurgerIcon from '~/07-shared/assets/svg/exit-burger-icon.svg';

interface Props extends ButtonProps {
    isOpen: boolean;
}

export const BurgerButton = (props: Props) => {
    const { isOpen, onClick } = props;

    return (
        <Button
            onClick={onClick}
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
            {isOpen ? (
                <Image src={exitBurgerIcon} alt='exit-burger-button' />
            ) : (
                <Image src={burgerIcon} alt='burger-button' />
            )}
        </Button>
    );
};
