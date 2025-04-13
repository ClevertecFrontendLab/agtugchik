import { HStack } from '@chakra-ui/react';

import layoutConfig from '~/07-shared/consts/app-layout-config';

import buttonProps from './consts/footer-buttons-props';
import { FooterButton } from './ui/FooterButton';

export const Footer = () => (
    <HStack
        data-test-id='footer'
        display={{ lg: 'none', base: 'flex' }}
        gridArea='footer'
        as='footer'
        position='fixed'
        bottom={layoutConfig.footer.position.bottom}
        zIndex={layoutConfig.footer.zIndex}
        h={layoutConfig.footer.height.base}
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
