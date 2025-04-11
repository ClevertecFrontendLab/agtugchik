import { Grid } from '@chakra-ui/react';

import { AppBreadcrumbs } from '~/05-features';
import { StatsIcons } from '~/05-features/StatsIcons';
import { User } from '~/06-entites';
import { BurgerButton, Logo } from '~/07-shared/components';
import layoutConfig from '~/07-shared/consts/app-layout-config';

export const Header = () => (
    <Grid
        data-test-id='header'
        as='header'
        position='fixed'
        top={layoutConfig.header.position.top}
        left={0}
        zIndex={layoutConfig.header.zIndex}
        w='100%'
        h={{ lg: layoutConfig.header.height.lg, base: layoutConfig.header.height.base }}
        px='16px'
        bg='var(--lime50)'
        templateAreas={{
            lg: `"logo crumbs user"`,
            base: `"logo stat burger"`,
        }}
        templateColumns={{
            lg: '256px 1fr 1fr',
            base: '1fr min-content min-content',
        }}
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
    </Grid>
);
