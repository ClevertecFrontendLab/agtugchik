import { Box } from '@chakra-ui/react';
import { memo } from 'react';

import layoutConfig from '~/07-shared/consts/app-layout-config';

import { NavigationFooter } from './ui';
import { NavigationAccordion } from './ui';

export const Navigation = memo(() => (
    <Box
        position='fixed'
        {...layoutConfig.nav.position}
        zIndex={layoutConfig.nav.zIndex}
        w={layoutConfig.nav.width}
        h={layoutConfig.nav.height}
        boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
        p='34px 0 34px 18px'
        display={{ lg: 'flex', base: 'none' }}
        flexDirection='column'
        justifyContent='space-between'
    >
        <NavigationAccordion />
        <NavigationFooter />
    </Box>
));
