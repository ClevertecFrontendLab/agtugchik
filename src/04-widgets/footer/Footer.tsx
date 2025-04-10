import { HStack } from '@chakra-ui/react';

import buttonProps from './consts/footer-buttons-props';
import { FooterButton } from './ui/FooterButton';

export const Footer = () => (
    <HStack
        display={{ lg: 'none', base: 'flex' }}
        gridArea='footer'
        as='footer'
        h='84px'
        w='100%'
        gap={0}
        bg='var(--lime50)'
        pb='10px'
    >
        {buttonProps.map((props) => (
            <FooterButton key={props.label} {...props} />
        ))}
    </HStack>
);
