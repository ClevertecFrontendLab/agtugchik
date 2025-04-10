import { GridItem } from '@chakra-ui/react';

import { AppBreadcrumbs } from '~/05-features';
import { StatsIcons } from '~/05-features/StatsIcons';
import { User } from '~/06-entites';
import { BurgerButton, Logo } from '~/07-shared/components';

export const Header = () => (
    <GridItem
        area='header'
        display='grid'
        as='header'
        w='100%'
        h='80px'
        padding='0 16px'
        bg='var(--lime50)'
        gridTemplateAreas={{ lg: `"logo crumbs user"`, base: `"logo stat burger"` }}
        gridTemplateColumns={{ lg: '256px 1fr 1fr', base: '1fr min-content min-content' }}
        alignItems='center'
    >
        <Logo gridArea='logo' />
        <AppBreadcrumbs gridArea='crumbs' />
        <User gridArea='user' mr='64px' />
        <StatsIcons
            display={{ lg: 'none', base: 'flex' }}
            flexDirection={{ base: 'row' }}
            w='min-content'
            h='min-content'
            spacing='16px'
        />
        <BurgerButton display={{ lg: 'none', base: 'flex' }} />
    </GridItem>
);
