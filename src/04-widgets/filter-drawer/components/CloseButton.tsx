import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps } from '@chakra-ui/react';

export const CloseButton = (props: IconButtonProps) => (
    <IconButton
        icon={<CloseIcon boxSize='10px' />}
        borderRadius='full'
        bg='black'
        color='white'
        width='24px'
        height='24px'
        minW='24px'
        minH='24px'
        _hover={{ bg: 'black' }}
        _active={{ bg: 'black' }}
        p='0'
        {...props}
    />
);
