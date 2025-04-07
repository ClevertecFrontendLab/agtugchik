import { GridItem } from '@chakra-ui/react';
import { memo } from 'react';

import { AppBreadcrumbs } from '~/05-features';
import { User } from '~/06-entites';
import { Logo } from '~/07-shared/components';

export const Header = memo(() => (
    <GridItem
        area='header'
        display='flex'
        as='header'
        px='10px'
        py='16px'
        w='100%'
        h='80px'
        bg='var(--lime50)'
        alignItems='center'
        justifyContent='space-between'
    >
        <Logo />
        <AppBreadcrumbs />
        <User />
    </GridItem>
));
